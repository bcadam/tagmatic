var Parse = require('parse/node').Parse;
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var elasticsearch = require('elasticsearch');


var Twitter = require('twitter');
var twitterClient = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

var Query = Parse.Object.extend("Query");
var queryReport = new Parse.Query(Query);

// queryReport.include("user");
// queryReport.include("classifier");
// queryReport.equalTo("published", true);

//console.log(searchValue);
queryReport.find({
    success: function(foundReports) {

        console.log(foundReports.length);


        for (var i = 0; i < foundReports.length; i++) {

            var classifier = require('./localclassifier');
            var queryValue = foundReports[i].get('searchValue');

            console.log(queryValue);

            var searchValue = queryValue + "%20%3A)";

            var twitterQueryParameters = {
                q: searchValue,
                count: 100,
                lang: 'en',
            };


            twitterClient.get('search/tweets', twitterQueryParameters, function(error, tweets, response) {
                if (error) {
                    console.log(error);
                    console.log(response.message);
                }
                for (var y = 0; y < tweets.statuses.length; y++) {
                    var textOfTweet = tweets.statuses[y].text
                    console.log(textOfTweet);
                    classifier.classifierObject.addDocument(textOfTweet, "Positive");
                };
                classifier.classifierObject.train();
                classifier.classifierObject.save('sentiment_classifier.json', function(err, classifier) {
                    // the classifier is saved to the classifier.json file!
                //processTweets(tweets.statuses);
                console.log("saved back to file");
                });
            });



            sleep(5000);


        };






    },
    error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
    }
});

//var queryValue = "computer";





function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


function processTweets(data, query) {
    var queryString = query;

    var size = Object.size(data);



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
}
