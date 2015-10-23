var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

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

    var searchFor = "wearesocial";
    var params = {
        track: searchFor,
        locations: "103.570862,1.228658,104.095459,1.484018",
        language: "en"
    };

    // var twitterQueryParameters = {
    //     q: query,
    //     count : count,
    //     language : language,
    //     result_type : "popular"
    // };

    var params = {
        track: "intel",
        result_type : "popular",
        language: "en"
    };



    client.stream('statuses/filter', params, function(stream) {
        console.log("Open Stream");
        stream.on('data', function(tweet) {
            myDb.collection('Tweet').update({
                    _id: tweet.id
                }, {
                    $push: {
                        tweet: tweet
                    } // end of $set
                }, // end of update document
                {
                    upsert: true
                }
            );
            myDb.collection('Query').update({
                    _id: searchFor
                }, {
                    $push: {
                        tweet: tweet.id
                    } // end of $set
                }, // end of update document
                {
                    upsert: true
                }
            );
            console.log(tweet.user.screen_name);
            console.log(tweet.text);
        });
        stream.on('error', function(error) {
            console.log(error);
        });
    });





});
