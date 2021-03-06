var express = require('express');
var elasticsearch = require('elasticsearch');
var Blob = require('blob');
var cors = require('cors'); //Cross Orgigin Request Management
var bodyParser = require('body-parser');
var rollbar = require('rollbar'); //Crash analytics for app
var discoverEngine = require('./customerdiscovery');
var Parse = require('parse/node').Parse;

var apiRouter = express.Router();
var adminRouter = express.Router();
var mapRouter = express.Router();

// var io = require('socket.io')(express);
// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

/******Set up the basic app*****/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/

var app = express();
app.use(cors());
app.use(rollbar.errorHandler('50d51cb147544aef986f527c5fc38a06'));
app.locals.title = 'oneMonarch';
app.locals.email = 'adam.cragg@gmail.com';
app.locals.twitterConfig = {
    "consumerKey": "99U4wZ1wPFmuVE0qWmi7fTllB",
    "consumerSecret": "U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9",
    "accessToken": "312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26",
    "accessTokenSecret": "cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK",
    "callBackUrl": "https://onemonarch.herokuapp.com/"
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static('public'));

/**Connect to Mongo/Twitter/Parse**/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/

var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';
// var url = 'mongodb://adminuser:adminuseradminuser123@128.122.36.72:27017/tagmatic';
// var url = 'mongodb://adminuser:adminuseradminuser123@localhost:27017/tagmatic';

var myDb;
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    //console.log("Connected correctly to server");
    myDb = db;
});
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');



app.use('/api', apiRouter);
app.use('/admin', adminRouter);
app.use('/map', mapRouter);

app.set('port', (process.env.PORT || 5000));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.get(['/app','/app/*'], function(req, res) {
    res.sendFile('app.html', {
        root: __dirname + '/public'
    });
});

app.get('/data', function(req, res) {
    res.sendfile('data.html');
});

mapRouter.use('/', express.static('public/map.html'));

apiRouter.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
});

apiRouter.get('/twitter', cors(), function(req, res) {
    res.json({
        message: 'Try these routes from here twitter/user/:username'
    });
});

/*This is a live call to twitter. It also creates a query record 
in the database which will call the word to be watched gong forward*/
apiRouter.get('/twitter/search/:query/:count?/:language?', cors(), function(req, res) {
    console.log("retrieving tweets");
    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);
    var language = (req.params.language == null ? null : req.params.language);

    console.log("language is " + language);
    console.log("count is " + count);

    var Twitter = require('twitter');
    var twitterClient = new Twitter({
        consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
        consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
        access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
        access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
    });


    var twitterQueryParameters = {
        q: query,
        count: count,
        lang: 'en',
    };

    twitterClient.get('search/tweets', twitterQueryParameters, function(error, tweets, response) {
        if (error) {
            //throw error;
            console.log(error);
            console.log(response.message);
        }
        tweets = tweets['statuses']
        res.json({
            twitterResponse: tweets
        });
        processTweets(tweets, query);
    });
});

/*This is a call to twitter for tweets from a few days ago.
It also creates a query record to watch the phrase going forward*/
apiRouter.get('/twitter/historical/:query/:count?/:language?', cors(), function(req, res) {

    console.log("retrieving tweets");
    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);
    var language = (req.params.language == null ? null : req.params.language);

    console.log("language is " + language);
    console.log("count is " + count);

    var Twitter = require('twitter');
    var twitterClient = new Twitter({
        consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
        consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
        access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
        access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
    });

    var d = new Date();

    //Gets a random number between 1 and 6 to set how far back the tweets should go
    var num = Math.floor(Math.random() * 6 + 1);

    d.setDate(d.getDate() - num);

    d = "%20until%3A" + d.toISOString().split('T')[0];
    console.log('airbnb%20until%3A2015-11-19');
    console.log(query + d);

    var twitterQueryParameters = {
        q: query + d,
        count: count,
        lang: 'en'
    };

    twitterClient.get('search/tweets', twitterQueryParameters, function(error, tweets, response) {
        if (error) {
            //throw error;
            console.log(error);
            console.log(response.message);
        }
        tweets = tweets['statuses']
        res.json({
            twitterResponse: tweets
        });
        processTweets(tweets, query);
    });
});

/*This only looks into the database. It does not call to twitter
It will return raw tweets from yesterday*/
apiRouter.get('/twitter/lastday/:value/:count?', function(req, res) {
    var needle = req.params.value;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);

    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });

    elasticClient.search({
        index: 'twitter',
        type: 'tweet',
        size: 500,
        body: {
            query: {
                filtered: {
                    query: {
                        match: {
                            _all: needle
                        }
                    },
                    filter: {
                        range: {
                            created_at: {
                                gte: "now-1d/d",
                                lt: "now/d"
                            }
                        }
                    }
                }
            }
        }
    }).then(function(resp) {
        var justTweets = [];

        for (var i = 0; i < resp['hits']['hits'].length; i++) {
            justTweets.push(resp['hits']['hits'][i]['_source']);
        };
        res.json({
            tweets: justTweets
        });
    });
});

/*This only looks into the database. It does not call to twitter
It will return raw tweets*/
apiRouter.get('/twitter/database/:value/:count?', cors(), function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count != null ? req.params.count : 500)
    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });
    var lengthOfTweetsFound;
    var tweets;
    elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
                    filtered: {
                        query: {
                            match: {
                                _all: needle
                            }
                        }

                    }
                }
            }
        })
        .then(function(resp) {
            var processedTweets = [];
            for (var i = 0; i < resp['hits']['hits'].length; i++) {
                processedTweets.push(resp['hits']['hits'][i]['_source']);
            };
            res.json({
                tweets: processedTweets
            });
        });
});

/*This only looks into the database. It does not call to twitter
It will return the parts of speech of tweets*/
apiRouter.get('/twitter/parts/:value/:count?', cors(), function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count != null ? req.params.count : 500)
        // var count = 50;
    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });
    var lengthOfTweetsFound;
    var tweets;
    elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
                    filtered: {
                        query: {
                            match: {
                                _all: needle
                            }
                        }

                    }
                }
            }
        })
        .then(function(resp) {
            var processedTweets = [];
            for (var i = 0; i < resp['hits']['hits'].length; i++) {
                processedTweets.push(resp['hits']['hits'][i]['_source']);
            };
            //console.log(processedTweets.length);
            processedTweets = discoverEngine.partsOfSpeech(processedTweets);
            res.json({
                partsOfSpeech: processedTweets
            });
        });
});

apiRouter.get('/twitter/words/:value/:count?', cors(), function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count != null ? req.params.count : 500)
        // var count = 50;
    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });
    var lengthOfTweetsFound;
    var tweets;
    elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
                    filtered: {
                        query: {
                            match: {
                                _all: needle
                            }
                        }

                    }
                }
            }
        })
        .then(function(resp) {
            var processedTweets = [];
            for (var i = 0; i < resp['hits']['hits'].length; i++) {
                processedTweets.push(resp['hits']['hits'][i]['_source']);
            };
            //console.log(processedTweets.length);
            processedTweets = discoverEngine.returnWords(processedTweets);
            res.json({
                partsOfSpeech: processedTweets
            });
        });
});

/*
This only looks into the database. It does not call to twitter
It will return tweets that have a location*/
apiRouter.get('/twitter/geotagged/:value/:count?', function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);

    // var Query = Parse.Object.extend("Query");
    // var queryvalue = new Query();

    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });

    var lengthOfTweetsFound;
    var tweets;

    elasticClient.search({
        index: 'twitter',
        type: 'tweet',
        size: count,
        body: {
            query: {
                filtered: {
                    query: {
                        match: {
                            _all: needle
                        }
                    },
                    filter: {
                        not: {
                            filter: {
                                missing: {
                                    field: "coordinates"
                                }
                            }
                        }
                    }
                }
            }
        }
    }).then(function(resp) {
        var processedTweets = [];
        for (var i = 0; i < resp['hits']['hits'].length; i++) {
            processedTweets.push(resp['hits']['hits'][i]['_source']);
        };
        res.json({
            tweets: processedTweets
        });
    });
});

/*Dumby end used for testing*/
apiRouter.get('/twitter/formatted/:value/:count?', function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count != null || req.params.count < 200 ? req.params.count : 200)
    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });
    var lengthOfTweetsFound;
    var tweets;
    elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
                    filtered: {
                        query: {
                            match: {
                                _all: needle,
                                in_reply_to_screen_name : null
                            }
                        }

                    }
                }
            }
        })
        .then(function(resp) {
            var processedTweets = [];
            for (var i = 0; i < resp['hits']['hits'].length; i++) {
                processedTweets.push(resp['hits']['hits'][i]['_source']);
            };

            for (var i = 0; i < processedTweets.length; i++) {
                processedTweets[i].sentiment = discoverEngine.classifyTweetSentimentScore(processedTweets[i].text);
                processedTweets[i].partsOfSpeech = discoverEngine.partsOfSpeechForSingleTweet(processedTweets[i].text);
            };



            res.json({
                tweets: processedTweets
            });
        });

});

/*Dumby end used for testing*/
apiRouter.get('/testingend', function(req, res) {

    var elasticsearch = require('elasticsearch');

    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });

    res.json({
        response: "Let's do this"
    });
});

/**This only looks into the database. It does not call to twitter
It will return raw tweets that have been proccessed for the various things
that we are looking for**/
apiRouter.get('/data/:value/:count?', cors(), function(req, res) {

    var needle = req.params.value;
    var count = (req.params.count != null ? req.params.count : 500)

    // var Query = Parse.Object.extend("Query");
    // var queryvalue = new Query();
    // queryvalue.set("searchValue", needle);
    // queryvalue.save();

    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });

    var lengthOfTweetsFound;
    var tweets;

    elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
                    filtered: {
                        query: {
                            match: {
                                _all: needle
                            }
                        }

                    }
                }
            }
        })
        .then(function(resp) {

            var responseObject = {
                processedTweets: [],
                followers: [],
                words: [],
                sentiment: [],
                locations: []
            };

            //var processedTweets = [];

            for (var i = 0; i < resp['hits']['hits'].length; i++) {
                responseObject.processedTweets.push(resp['hits']['hits'][i]['_source']);
            };

            //Just for testing load times
            if (true) {
                responseObject.followers = discoverEngine.returnFollowers(responseObject.processedTweets, res);
                //responseObject.words = discoverEngine.returnWords(responseObject.processedTweets);
                // responseObject.words = discoverEngine.combineBasedOnSimilarityOfString(words,.93);
                responseObject.sentiment = discoverEngine.classifyTweetsSentiment(responseObject.processedTweets);
                responseObject.locations = discoverEngine.returnLocations(responseObject.processedTweets);
                responseObject.happyPartsOfSpeech = discoverEngine.partsOfSpeech(responseObject.sentiment.happyTweets);
                responseObject.noisePartsOfSpeech = discoverEngine.partsOfSpeech(responseObject.sentiment.noiseTweets);
                responseObject.sadPartsOfSpeech = discoverEngine.partsOfSpeech(responseObject.sentiment.sadTweets);
                res.json({
                    length: responseObject.processedTweets.length,
                    followers: responseObject.followers,
                    words: responseObject.words,
                    locations: responseObject.locations,
                    sentiment: responseObject.sentiment,
                    happyPartsOfSpeech: responseObject.happyPartsOfSpeech,
                    noisePartsOfSpeech: responseObject.noisePartsOfSpeech,
                    sadPartsOfSpeech: responseObject.sadPartsOfSpeech
                });
            }
            //Just for testing
            else {
                res.json({
                    tweets: responseObject.processedTweets
                });
            }


        });


    // res.json({
    //     status: "done"
    // });
});







apiRouter.get('/queries', function(req, res) {
    myDb.collection('Query', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
});

apiRouter.get('/queries/:id', function(req, res) {
    var id = req.params.id;
    console.log('Retrieving query: ' + id);
    myDb.collection('Query', function(err, collection) {
        collection.findOne({
            '_id': id
        }, function(err, item) {
            res.send(item);
        });
    });
});

apiRouter.post('/queries', function(req, res) {
    var query = req.body;
    console.log('Adding query: ' + JSON.stringify(query));
    myDb.collection('Query', function(err, collection) {
        collection.insert(query, {
            safe: true
        }, function(err, result) {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
});

apiRouter.put('/queries/:id', function(req, res) {
    var id = req.params.id;
    var query = req.body;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(query));
    db.collection('Query', function(err, collection) {
        collection.update({
            '_id': new BSON.ObjectID(id)
        }, query, {
            safe: true
        }, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(query);
            }
        });
    });
});

apiRouter.delete('/queries/:id', function(req, res) {
    var id = req.params.id;
    console.log('Deleting query: ' + id);
    db.collection('Query', function(err, collection) {
        collection.remove({
            '_id': id
        }, {
            safe: true
        }, function(err, result) {
            if (err) {
                res.send({
                    'error': 'An error has occurred - ' + err
                });
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
});

apiRouter.get('/tweets', function(req, res) {
    myDb.collection('Tweet', function(err, collection) {
        collection.find().limit(100).toArray(function(err, items) {
            res.send(items);
        });
    });
});

apiRouter.get('/suggested', function(req, res) {
    myDb.collection('Suggested', function(err, collection) {
        collection.find().limit(100).toArray(function(err, items) {
            res.send(items);
        });
    });
});

apiRouter.post('/suggested', function(req, res) {
    var nameOfHeader = req.body.nameOfHeader;
    var tagsInHeader = req.body.tagsInHeader;
    var published = req.body.published;

    console.log(nameOfHeader);

    myDb.collection('Suggested').update({
            _id: {
                nameOfHeader, tagsInHeader
            }
        }, {
            $push: {
                nameOfHeader: nameOfHeader,
                tagsInHeader: tagsInHeader,
                published: published
            } // end of $set
        }, // end of update document
        {
            upsert: true
        }
    );
    console.log(variable);
    res.send(true);
});

/******   Socket Connection  *****/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
var server = app.listen(app.get('port'), function() {
    console.log('oneMonarch is running on port', app.get('port'));
});

var query = 'intel';

var io = require('socket.io').listen(server);
io.on('connection', function(socket) {

    var Twitter = require('twitter');
    var twitterClient = new Twitter({
        consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
        consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
        access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
        access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
    });

    socket.on('subscribe data', function(data) {

        var params = {
            track: query
        };



        twitterClient.stream('statuses/filter', params, function(stream) {
            stream.on('data', function(tweet) {
                //console.log(tweet.user.screen_name);
                //console.log(tweet.text);

                if (tweet.coordinates != null) {
                    console.log(tweet.text);

                    socket.emit('tweets', {
                        tweet: tweet
                    });


                }
            });
            stream.on('error', function(error) {
                console.log(error);
            });
        });
    });

    socket.on("longitudinal data", function(data) {
        var firstPointLng = data[0].lng;
        var firstPointLat = data[0].lat;

        var secondPointLng = data[1].lng;
        var secondPointLat = data[1].lat;

        var southWestLat = (firstPointLat > secondPointLat ? secondPointLat : firstPointLat);
        var southWestLng = (firstPointLng > secondPointLng ? secondPointLng : firstPointLng);


        var northEastLat = (firstPointLat < secondPointLat ? secondPointLat : firstPointLat);
        var northEastLng = (firstPointLng < secondPointLng ? secondPointLng : firstPointLng);

        var location = "" + southWestLng + "," + southWestLat + "," + northEastLng + "," + northEastLat;
        //console.log(location);


        var query = data[2];
        console.log(query);
        var twitterQueryParameters = {
            q: query,
            count: 100,
            location: location
        };

        twitterClient.get('search/tweets', twitterQueryParameters, function(error, tweets, response) {
            if (error) throw error;
            tweets = tweets['statuses']

            var size = Object.size(tweets);

            for (var i = 0; i < size; i++) {
                //console.log(tweets[i].coordinates);
                if (tweets[i].coordinates != null) {
                    console.log(tweets[i].text);
                    socket.emit('tweets', {
                        tweet: tweets[i]
                    });
                }
            }
        });


        var params = {
            track: query,
            location: location
        };

        twitterClient.stream('statuses/filter', params, function(stream) {
            stream.on('data', function(tweet) {
                //console.log(tweet.user.screen_name);
                //console.log(tweet.text);

                if (tweet.coordinates != null) {
                    console.log(tweet.text);
                    socket.emit('tweets', {
                        tweet: tweet
                    });


                }
            });
            stream.on('error', function(error) {
                console.log(error);
            });
        });
    });
});

Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function processTweets(data, query) {
    var queryString = query;

    var Query = Parse.Object.extend("Query");
    var queryvalue = new Query();

    queryvalue.set("searchValue", query);
    queryvalue.save();


    var size = Object.size(data);


    var elasticsearch = require('elasticsearch');

    var elasticClient = new elasticsearch.Client({
        host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace'
    });

    var bulkBody = [];
    for (var i = 0; i <= size - 1; i++) {
        elasticClient.create({
            index: 'twitter',
            type: 'tweet',
            id: data[i]['id'],
            body: data[i]
        });

        //bulkBody.push({ "create" : { "_index" : "testindex", "_type" : "tweet", "_id" : data[i]['id'], "body" : data[i] } });
    }

    // elasticClient.indices.create({
    //     index: "testindex"}, function (err, resp, respcode) {
    //     console.log(err, resp, respcode);
    //     // resp.json({
    //     //     tweets: err
    //     // });
    // });


    // elasticClient.bulk({
    //     body: bulkBody
    // }, function(err, resp) {
    //     console.log(resp);
    // });



    // var bulkTweet = myDb.collection('Tweet').initializeUnorderedBulkOp();
    // for (var i = 0; i <= size - 1; i++) {

    //     bulkTweet.insert({
    //         _id: data[i]['id'],
    //         data: data[i]
    //     });

    //     myDb.collection('Query').update({
    //             _id: queryString
    //         }, {
    //             $push: {
    //                 tweet: data[i]['id_str']
    //             } // end of $set
    //         }, // end of update document
    //         {
    //             upsert: true
    //         }
    //     );
    // }
    // bulkTweet.execute();
}
