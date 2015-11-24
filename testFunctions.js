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




var finalTweets = tweets.tweets.twitterResponse;
var words = discoverEngine.returnWords(finalTweets);
//words = discoverEngine.combineBasedOnSimilarityOfString(words,.94);

console.log(words.slice(0,10));

