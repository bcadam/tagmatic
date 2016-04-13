var Parse = require('parse/node').Parse;
var Papa = require('babyparse');
var Blob = require('blob');
var fs = require('fs');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';
var myDb;

// var url = 'mongodb://adminuser:adminuseradminuser123@128.122.36.72:27017/tagmatic';
// var url = 'mongodb://adminuser:adminuseradminuser123@localhost:27017/tagmatic';

var mongodb = require('mongodb-then');
var db = mongodb(url, [
    'Query', 'Tweet', 'Test'
]);

function sendReports() {


    var Report = Parse.Object.extend("Report");
    var queryReport = new Parse.Query(Report);

    queryReport.include("user");
    queryReport.include("classifier");

    var results;

    queryReport.find({
        success: function(foundReports) {

            results = foundReports;

        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    }).then(function() {

        for (var i = 0; i < results.length; i++) {
            var queryText = results[i].get('query');

            db.Query.find({
                    _id: queryText
                })
                .forEach(function(query) {
                    var allTweetIds = query.tweet.map(function(x) {
                        return parseInt(x, 10);
                    });

                    var queryText = query._id;


                    //console.log(allTweetIds);
                    db.Tweet.find({
                            _id: {
                                $in: allTweetIds
                            }
                        })
                        .toArray()
                        .then(function(allAssociatedTweetsFromQuery) {
                            //console.log(queryText);
                            var justTweets = [];

                            for (var i = 0; i < allAssociatedTweetsFromQuery.length; i++) {
                                justTweets.push(allAssociatedTweetsFromQuery[i].data);
                                //console.log(allAssociatedTweetsFromQuery[i].data);
                            };

                            //console.log(justTweets);

                            var confiVariables = {
                                delimiter: "", // auto-detect
                                newline: "", // auto-detect
                                header: true,
                                dynamicTyping: false,
                                preview: 0,
                                encoding: "",
                                worker: false,
                                comments: false,
                                step: undefined,
                                complete: function(results) {
                                    console.log("created file");
                                },
                                error: undefined,
                                download: false,
                                skipEmptyLines: false,
                                chunk: undefined,
                                fastMode: undefined,
                                beforeFirstChunk: undefined,
                                withCredentials: undefined
                            };


                            data = Papa.unparse(justTweets);
                            var time = new Date();
                            var timeString = "TagMatic " + queryText + " " + time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear() + ".csv";
                            //console.log(allAssociatedTweetsFromQuery[i].id);
                            fs.writeFile(timeString, data, 'utf8', function() {
                                console.log("File Saved as: " + timeString);
                            });

                        }).then(function(){return true;});


                    // .forEach(function(tweet) {
                    //     //if (err) return console.error(err);
                    //     console.log(tweet);
                    //     //tweets.push(tweet);
                    // });

                });



        };
    });


}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


sendReports();
