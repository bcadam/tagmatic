/** Where all the requires go **/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/

var express = require('express');
var apiRouter = express.Router();
var adminRouter = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var rollbar = require('rollbar');
var Parse = require('parse/node').Parse;


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
app.locals.title = 'TagMatic';
app.locals.email = 'adam.cragg@gmail.com';
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
    console.log("Connected correctly to server");
    myDb = db;
});

var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


// var apiRouter = require('./apiRouter');

app.use('/api', apiRouter);
app.use('/admin',adminRouter);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use('/', express.static('public'));
app.use('/images', express.static('images'))
app.use('/css', express.static('css'));


/******   ADMIN ROUTER HERE  *****/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/



adminRouter.get('/', function(req, res) {
    res.send('random.text');
    next();
});




/******   API ROUTER HERE  *****/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/
/*******************************/





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

apiRouter.get('/twitter/search/:query/:count?/:language?', cors(), function(req, res) {

    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);
    var language = (req.params.language == null ? null : req.params.language);

    console.log(language);

    var twitterQueryParameters = {
        q: query,
        count : count,
        language : language,
        result_type : "popular"
    };

    client.get('search/tweets', twitterQueryParameters , function(error, tweets, response) {
        if (error) throw error;
        tweets = tweets['statuses']
        res.json({
            twitterResponse: tweets
        });
        processTweets(tweets, query);
    });

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
