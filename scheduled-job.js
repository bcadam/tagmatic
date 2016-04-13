var Parse = require('parse/node').Parse;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function searchTwitter() {
    Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');

    var Report = Parse.Object.extend("Query");
    var query = new Parse.Query(Report);


    query.find({
        success: function(results) {

            results = shuffle(results);

            for (var i = 0; i < results.length; i++) {

                //var searchValue = results[i].get('query');
                var searchValue = results[i].get('searchValue');

                console.log("searching for: " + searchValue);
                var searchCount = 100;

                var xmlhttp = new XMLHttpRequest();

                var host = "https://onemonarch.herokuapp.com";
                var url = host + "/api/twitter/search/" + searchValue + "/" + searchCount;


                var xmlhttp;
                xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        console.log("done");
                    }
                }
                xmlhttp.open("GET", url, false);
                xmlhttp.send();

                sleep(3000);

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
