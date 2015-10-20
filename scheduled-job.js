var Parse = require('parse/node').Parse;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


function searchTwitter() {
    //console.log('Hello');
    //http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

    var searchValue = 'intel';
    var searchCount = 100;

    var Report = Parse.Object.extend("Report");
    var query = new Parse.Query(Report);

    query.equalTo("published", true);

    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {

                var searchValue = 'intel';
                var searchCount = 100;

                var searchValue = results[i].get('query');
                console.log("searching for: " + searchValue);
                var searchCount = 100;

                var xmlhttp = new XMLHttpRequest();
                var host = "https://tagmatic.herokuapp.com";
                var url = host + "/api/twitter/search/" + searchValue + "/" + searchCount;

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
                }
                xmlhttp.open("GET", url, true);
                xmlhttp.send();

                sleep(300);

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


searchTwitter();
