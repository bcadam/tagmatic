var Parse = require('parse/node').Parse;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


function sendReports() {

    var Report = Parse.Object.extend("Report");
    var queryReport = new Parse.Query(Report);

    queryReport.equalTo("published", true);
    queryReport.include('user.classifier');
    //query.include('classifier');


    queryReport.find({
        success: function(results) {


            for (var i = 0; i < results.length; i++) {

                var userEmail = results[i].get('user').get('email');
                console.log(userEmail);
                var classifier = results[i].get('classifier');
                console.log(classifier);

                var query = results[i].get('query');
                console.log(query);

                var holdQuery = query;

                var Query = Parse.Object.extend("Query");
                var queryQuery = new Parse.Query(Query);
                queryQuery.equalTo("searchedFor", holdQuery);
                console.log('holdQuery: ' + holdQuery);
                queryQuery.include(["user.tweets"]);
                queryQuery.limit(5);
                queryQuery.find({
                    success: function(results) {
                        //console.log("found tweets");
                        //console.log(results[0].get('tweets'));

                        var queryTweets = results[0].get('tweets').query();
                        //console.log(query);
                        queryTweets.limit(1000);
                        queryTweets.find({success:function(results){
                            console.log(results.length);

                        },error:function(error){}});
                        //query.f


                    },
                    error: function(error) {
                        console.log("did not find tweets");
                    }
                });
                
                sleep(2000);
            }

        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
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
