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

wordnet.lookup('cat', function(results) {
    results.forEach(function(result) {
        console.log('------------------------------------');
        //console.log(result.synsetOffset);
        //console.log(result.pos);
        //console.log(result.lemma);
        //console.log(result.synonyms);
        //console.log(result.pos);
        //console.log(result.gloss);
    });


});


// var finalTweets = tweets.tweets.twitterResponse;
// var words = discoverEngine.returnWords(finalTweets);
//words = discoverEngine.combineBasedOnSimilarityOfString(words,.94);

//console.log(words.slice(0,10));

