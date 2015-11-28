


var queryValue = "computer";










var Parse = require('parse/node').Parse;
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var classifier = require('./localclassifier');

var Twitter = require('twitter');
var twitterClient = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

// var Report = Parse.Object.extend("Query");
// var query = new Parse.Query(Report);

// query.find({
//     success: function(results) {

//         console.log("There are this many queries: " + results.length);

//         for (var i = 0; i < results.length; i++) {

//var queryValue = results[i].get('searchValue');

var searchValue = queryValue + "%20%3A)";
console.log(searchValue);

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
        console.log("saved back to file");
    });
});
//             sleep(15000);
//         };


//     },
//     error: function(error) {
//         alert("Error: " + error.code + " " + error.message);
//     }
// });




function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
