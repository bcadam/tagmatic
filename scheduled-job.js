var Parse = require('parse/node').Parse;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


function searchTwitter() {
    //console.log('Hello');
    //http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial



    // var Report = Parse.Object.extend("Report");
    // var query = new Parse.Query(Report);
    // query.equalTo("published", true);

    var Report = Parse.Object.extend("Query");
    var query = new Parse.Query(Report);


    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {


                //var searchValue = results[i].get('query');
                var searchValue = results[i].get('searchValue');



                console.log("searching for: " + searchValue);
                var searchCount = 100;

                var xmlhttp = new XMLHttpRequest();

                var host = "https://onemonarch.herokuapp.com";
                var url = host + "/api/twitter/search/" + searchValue + "/" + searchCount;

                // xmlhttp.onreadystatechange = function() {
                //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {}
                //     console.log();
                // }
                // xmlhttp.open("GET", url, true);
                // xmlhttp.send();
                // sleep(5000);
                // var xmlHttp = new XMLHttpRequest();
                // xmlHttp.open("GET", url, false); // false for synchronous request
                // xmlHttp.send(null);

                var xmlhttp;
                xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        // document.getElementById("demo").innerHTML =
                        //     xmlhttp.responseText;

                        console.log("done");
                        //console.log(xmlhttp.responseText);
                    }
                }
                xmlhttp.open("GET", url, false);
                xmlhttp.send();

                sleep(1000);

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
