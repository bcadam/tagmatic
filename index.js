var express = require('express');
var apiRouter = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');

var rollbar = require('rollbar');
var Parse = require('parse/node').Parse;

var app = express();
app.use(cors());

app.locals.title = 'TagMatic';
app.locals.email = 'adam.cragg@gmail.com';
var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';
var myDb;
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');
app.use(rollbar.errorHandler('50d51cb147544aef986f527c5fc38a06'));
app.locals.twitterConfig = {
    "consumerKey": "99U4wZ1wPFmuVE0qWmi7fTllB",
    "consumerSecret": "U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9",
    "accessToken": "312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26",
    "accessTokenSecret": "cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK",
    "callBackUrl": "https://tagmatic.herokuapp.com/"
};
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    myDb = db;
});



app.use('/api', apiRouter);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use('/', express.static('public'));
app.use('/images', express.static('images'))
app.use('/css', express.static('css'));

// var Twitter = require('twitter');
// var client = new Twitter({
//     consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
//     consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
//     access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
//     access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
// });


// client.stream('statuses/filter', {track: 'twitter'},  function(stream){
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });



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
apiRouter.get('/twitter/search/:query/:count?', cors(), function(req, res) {
    
    var query = req.params.query.toLowerCase();

    client.get('search/tweets', {
        q: query
    }, function(error, tweets, response) {
        //console.log(tweets);

        res.json({
            twitterResponse: tweets
        });


        processTweets(tweets, query);
    });


    //twitterSearch(req, res);
});
apiRouter.get('/queries', function(req, res) {

    myDb.collection('Query', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
});

app.get('/api/queries/:id', function(req, res) {
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

app.delete('/api/queries/:id', function(req, res) {
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

app.get('/api/tweets', function(req, res) {
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
    //console.log(variable);
    res.send(true);
});

app.listen(app.get('port'), function() {
    console.log('TagMatic is running on port', app.get('port'));
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
    var bulkTweet = myDb.collection('Tweet').initializeUnorderedBulkOp();
    // var bulkQuery = myDb.collection('Query').initializeUnorderedBulkOp();

    var size = Object.size(data);
    for (var i = 0; i <= size - 1; i++) {

        bulkTweet.insert({
            _id: data[i]['id_str'],
            data: data[i]
        });

        myDb.collection('Query').update({
                _id: queryString
            }, {
                $push: {
                    tweet: data[i]['id_str']
                } // end of $set
            }, // end of update document
            {
                upsert: true
            }
        );
    }
    bulkTweet.execute();
}
