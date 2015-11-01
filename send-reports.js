var Parse = require('parse/node').Parse;
var PapaParse = require('papaparse');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');



function sendReports() {

    var myDb;
    var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';

    // var url = 'mongodb://adminuser:adminuseradminuser123@128.122.36.72:27017/tagmatic';
    // var url = 'mongodb://adminuser:adminuseradminuser123@localhost:27017/tagmatic';

    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');


    MongoClient.connect(url, function(err, db) {

        assert.equal(null, err);
        console.log("Connected correctly to server");
        myDb = db;

        var Report = Parse.Object.extend("Report");
        var queryReport = new Parse.Query(Report);
        queryReport.include("user");

        queryReport.find({
            success: function(results) {

                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) {



                    var object = results[i];

                    //console.log(object.get('user').get('email'));
                    var query = object.get('query');


                    myDb.collection('Query').find({
                        _id: query
                    }).forEach(function(query) {


                        //console.log(query);

                        var result = query.tweet.map(function(x) {
                            return parseInt(x, 10);
                        });


                        var tweets = [];
                        var count;

                        myDb.collection('Tweet').find({
                            _id: {
                                $in: result
                            }
                        }).forEach(function(tweet) {
                            console.log(tweet._id);
                        });


                        

                    });

                }

            },
            error: function(error) {
                console.log("Error: " + error.code + " " + error.message);
            }
        });

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
