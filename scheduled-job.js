var Parse = require('parse/node').Parse;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


function searchTwitter() {
    //console.log('Hello');
    //http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial

    var searchValue = 'intel';
    var searchCount = 100;

    var xmlhttp = new XMLHttpRequest();
    var host = "https://tagmatic.herokuapp.com";
    var url = host + "/api/twitter/search/" + searchValue + "/" + searchCount;


    var SuggestedClassifier = Parse.Object.extend("SuggestedClassifier");
    var query = new Parse.Query(SuggestedClassifier);
    query.equalTo("published", true);
    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++) {

                var object = results[i];
                //alert(object.id);
                tempSuggestedClassifier.push([object.get("nameOfHeader"), object.get("tagsInHeader"), true]);
            }

        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });





    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();



}


searchTwitter();
