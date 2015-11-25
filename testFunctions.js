var Parse = require('parse/node').Parse;
var Papa = require('babyparse');
var Blob = require('blob');
var fs = require('fs');
var discoverEngine = require('./customerdiscovery');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('zYrJvetHxH4ZIpyztJM4NQ');
var elasticsearch = require('elasticsearch');
var tweets = require('./tweets');
var natural = require('natural');
var wordnet = new natural.WordNet();

// wordnet.lookup('cat', function(results) {
//     results.forEach(function(result) {
//         console.log('------------------------------------');
//         //console.log(result.synsetOffset);
//         //console.log(result.pos);
//         //console.log(result.lemma);
//         //console.log(result.synonyms);
//         //console.log(result.pos);
//         //console.log(result.gloss);
//     });
// });
// var finalTweets = tweets.tweets.twitterResponse;
// var words = discoverEngine.returnWords(finalTweets);
// words = discoverEngine.combineBasedOnSimilarityOfString(words,.94);

// console.log(words.slice(0,10));

twitterConfig = {
    "consumerKey": "99U4wZ1wPFmuVE0qWmi7fTllB",
    "consumerSecret": "U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9",
    "accessToken": "312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26",
    "accessTokenSecret": "cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK",
    "callBackUrl": "https://onemonarch.herokuapp.com/"
};

var Twitter = require('twitter');
var twitterClient = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

twitterClient.stream('statuses/filter', params, function(stream) {
    stream.on('data', function(tweet) {
        //console.log(tweet.user.screen_name);
        //console.log(tweet.text);

        
    });
    stream.on('error', function(error) {
        console.log(error);
    });
});
