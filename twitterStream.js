var Parse = require('parse/node').Parse;
var fs = require('fs');
var discoverEngine = require('./customerdiscovery');
var elasticsearch = require('elasticsearch');
var natural = require('natural');
var wordnet = new natural.WordNet();
var Twitter = require('twitter');


var fullString = '';
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');

var Report = Parse.Object.extend("Query");
var query = new Parse.Query(Report);


query.find({
    success: function(results) {
        for (var i = 0; i < results.length; i++) {
            fullString = fullString + ',' + results[i].get('searchValue');
        }

        openStream(fullString);

    },
    error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
    }
});

function openStream(fullString) {

    var elasticsearch = require('elasticsearch');
    var elasticClient = new elasticsearch.Client({
        host: 'https://search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
        log: 'trace',
        stall_warnings: true
    });

    var twitterClient = new Twitter({
        consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
        consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
        access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
        access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
    });


    //var query = "twitter,nyuentrepreneur,zenefits,cats,christmas,computer,credit karma,dog,trump,draftkings,dropbox,entrepreneur,startup,entrepreneurship,est,evernote,facebook,flipkart,foursquare,game,github,gmail,hackathon,happy,wearesocial,intel,apple,dentsu,interpublic,publicis,saatchi,lacrosse,gmail,foursquare,twitter,canada election,UBC,ubc.ca,stern,new york,england,happy,sad,buying,social,facebook,advertisement,sophisticated,automated,machine learning,advertising,ipad,laptop,often,test,bob,100,hobbit,reeses,hersheys,pikachu,cats,huge,hello,last kingdom,computer,harvard,helevision,techcrunch,xconomy,viking,twitter,game,san francisco,london,scotland,russia,hope,@apple,singapore,miami,rome,paris,barcelona,portugal,germany,cameron,miami,florida,@saatchi,black friday,vancouver,airbnb,uber,xiamoi,palantir,snapchat,flipkart,tesla,spacex,pinterest,lufax,wework,theranos,spotify,meituan,stripe,credit karma,evernote,github";
    var params = {
        track: fullString,
        language: "en"
    };

    var x = 1;

    twitterClient.stream('statuses/filter', params, function(stream) {
        stream.on('data', function(tweet) {

            var elasticClient = new elasticsearch.Client({
                host: 'https://search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
                // log: 'trace',
                stall_warnings: true
            });
            var lengthOfTweetsFound;
            var tweets;


                // elasticClient.create({
                //     index: 'twitter',
                //     type: 'tweet',
                //     id: tweet['id'],
                //     body: tweet
                // }, function(error, response) {
                //     console.log(response);
                // });
               

            elasticClient.create({
                index: 'twitter',
                type: 'tweet',
                id: tweet['id'],
                body: tweet
            }, function(error, response) {
                console.log(response);
            });


        });
        // stream.on('error', function(error) {
        //     console.log(error);
        // });
        // stream.on('warning', function(warning) {
        //     console.log(warning);
        // });

    });


}
