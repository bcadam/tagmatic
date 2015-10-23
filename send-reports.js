var Parse = require('parse/node').Parse;
var PapaParse = require('papaparse');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');





function sendReports() {
    var myDb;
    var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';

    // var url = 'mongodb://adminuser:adminuseradminuser123@128.122.36.72:27017/tagmatic';
    // var url = 'mongodb://adminuser:adminuseradminuser123@localhost:27017/tagmatic';

    var MongoClient = require('mongodb').MongoClient,
        assert = require('assert');


    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        myDb = db;

        var Report = Parse.Object.extend("Report");
        var queryReport = new Parse.Query(Report);

        queryReport.equalTo("published", true);
        queryReport.include('user.classifier');
        queryReport.equalTo('query', "buying");
        var favoriteCount = 0;

        queryReport.find({
            success: function(results) {
                for (var i = 0; i < results.length; i++) {

                    var userEmail = results[i].get('user').get('email');
                    var classifier = results[i].get('classifier');
                    var queryValue = results[i].get('query');

                    myDb.collection('Query').find({
                        _id: queryValue
                    }).forEach(function(query) {

                        //console.log(query.tweet);


                        //var a = ['1', '2', '3'];
                        var result = query.tweet.map(function(x) {
                            return parseInt(x, 10);
                        });

                        myDb.collection('Tweet').find({
                            _id: {
                                $in: result
                            }
                        }).forEach(function(tweet) {
                            //console.log(tweet.data.favorite_count);
                            favoriteCount = favoriteCount + tweet.data.favorite_count;
                            console.log("Query value : %s has this many favs %s", queryValue,favoriteCount);
                        });





                    });

                    //sleep(1000);
                }



            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });



    });

}


// myDb.collection('Tweet').find({
//     _id: 657648744591003650
// }).toArray(function(err, items) {
//     // console.log(query);
//     // console.log(items);
// });

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


sendReports();
