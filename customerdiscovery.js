(function() {

    var Parse = require('parse/node').Parse;
    var Papa = require('babyparse');
    var Blob = require('blob');
    var fs = require('fs');
    var natural = require('natural');
    var localClassifier = require('./localclassifier');
    var tweets = require('./tweets');
    //console.log(tweets.tweets);
    //console.log(localClassifier.classifier);

    Parse.initialize("8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO", "oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV");

    function sortByOccurence(arrayOfData) {
        var counts = [];
        for (var i = 0; i < arrayOfData.length; i++) {
            var holder = arrayOfData[i];
            //console.log(location);
            counts[holder] = counts[holder] ? counts[holder] + 1 : 1;
        }
        delete counts[""];
        var finalArray = [];
        var counts = Object.keys(counts)
            .map(function(k) {
                finalArray.push([k, counts[k]])
                return counts[k]
            });
        // console.log(finalArray);
        finalArray.sort(function(a, b) {
            if (a[1] < b[1]) return 1;
            if (a[1] > b[1]) return -1;
            return 0;
        });

        //finalArray = exports.combineBasedOnSimilarityOfString(finalArray,.93);
        return finalArray;
    }

    exports.combineBasedOnSimilarityOfString = function(words, distanceForSame) {
        var arrayOfMatches = [];
        for (var i = 0; i < words.length; i++) {
            for (var j = i + 1; j < words.length; j++) {
                var distance = natural.JaroWinklerDistance(words[i][0], words[j][0]);
                if (distance > distanceForSame) {
                    words[i][1] = words[i][1] + words[j][1];
                    words.splice(j,0);
                }
            }
        }
        return words;
    }

    exports.returnLocations = function(tweets) {
        var locations = [];
        for (var i = 0; i < tweets.length; i++) {
            locations.push(tweets[i].user.location);
        };

        var finalArray = sortByOccurence(locations);
        //console.log(finalArray.splice(0, 5));
        return finalArray;
    }

    exports.returnWords = function(tweets) {
        var textOfTweets = [];
        for (var i = 0; i < tweets.length; i++) {
            var holder = tweets[i].text.split(' ');
            for (var y = 0; y < holder.length; y++) {
                textOfTweets.push(holder[y]);
            };
        };
        for (var i = 0; i < textOfTweets.length; i++) {
            textOfTweets[i] = textOfTweets[i].toLowerCase();
        };

        for (var i = 0; i < textOfTweets.length; i++) {
            if (textOfTweets[i].indexOf('.') == textOfTweets[i].length - 1) {
                textOfTweets[i] = textOfTweets[i].slice(0, textOfTweets[i].length - 1);
            }
            if (textOfTweets[i].indexOf('#') == 0) {
                textOfTweets[i] = textOfTweets[i].slice(1, textOfTweets[i].length);
            }
        };


        var wordsToDelete = ['into', 'ha', 'as', 'of', 'the', '&amp;', 'if', 'was', 'she', 'a', 'it', 'how', 'rt', 'a', 'de', 'la', 'i', 'in', 'my', 'to', 'the', 'no', 'at', 'el', 'en', 'que', 'you', '+', 'per', 'for', 'on', '-', 'their', 'and', 'we', 'with', 'is', 'del'];
        for (var i = 0; i < textOfTweets.length; i++) {
            for (var y = 0; y < wordsToDelete.length; y++) {
                if (textOfTweets[i] == wordsToDelete[y]) {
                    textOfTweets.splice(i, 1);
                }
            };

        };

        var finalArray = sortByOccurence(textOfTweets);
        //console.log(finalArray.slice(0, 10));
        return finalArray;
    }

    exports.returnFollowers = function(tweets) {
        var followers = [];
        var bucketedFollowers = [];

        for (var i = 0; i < tweets.length; i++) {
            var userCount = parseInt(tweets[i].user.followers_count);

            var x = userCount;
            switch (true) {
                case (x <= 5):
                    bucketedFollowers.push('0-5');
                    break;
                case (x > 5 && x <= 10):
                    bucketedFollowers.push('6-10');
                    break;
                case (x > 10 && x <= 50):
                    bucketedFollowers.push('11-50');
                    break;
                case (x > 50 && x <= 100):
                    bucketedFollowers.push('51-100');
                    break;
                case (x > 100 && x <= 1000):
                    bucketedFollowers.push('101-1,000');
                    break;
                case (x > 1001 && x <= 10000):
                    bucketedFollowers.push('1,001-10,000');
                    break;
                default:
                    bucketedFollowers.push('10,001+');
                    break;
            }
            followers.push(parseInt(tweets[i].user.followers_count));
        };

        var finalArray = sortByOccurence(bucketedFollowers);
        var orderedArray = [
            ['10,001+', 0],
            ['1,001-10,000', 0],
            ['101-1,000', 0],
            ['151-100', 0],
            ['11-50', 0],
            ['6-10', 0],
            ['0-5', 0]
        ];

        for (var i = 0; i < finalArray.length; i++) {
            //console.log(finalArray[i][0]);
            var holder = finalArray[i][1];
            switch (finalArray[i][0]) {
                case '10,0001+':
                    orderedArray[i][1] = holder
                    break;
                case '1,001-10,000':
                    orderedArray[i][1] = holder
                    break;
                case '101-1,000':
                    orderedArray[i][1] = holder
                    break;
                case '151-100':
                    orderedArray[i][1] = holder
                    break;
                case '11-50':
                    orderedArray[i][1] = holder
                    break;
                case '6-10':
                    orderedArray[i][1] = holder
                    break;
                case '0-5':
                    orderedArray[i][1] = holder
                    break;
                default:
                    //bucketedFollowers.push('10,001+');
                    break;
            }
        };
        //console.log(finalArray);

        //if you want them ordered by COUNT of number of followers
        // [ [ '101-1,000', 49 ],
        //   [ '1,001-10,000', 27 ],
        //   [ '11-50', 12 ],
        //   [ '51-100', 9 ],
        //   [ '0-5', 2 ],
        //   [ '6-10', 1 ] ]
        // console.log(finalArray.slice(0, 10));
        // return finalArray;

        //if you want the count ordered by TOTAL number of followers
        // [ [ '10,001+', 49 ],
        //   [ '1,001-10,000', 27 ],
        //   [ '101-1,000', 12 ],
        //   [ '151-100', 0 ],
        //   [ '11-50', 2 ],
        //   [ '6-10', 1 ],
        //   [ '0-5', 0 ] ]
        //console.log(orderedArray.slice(0, 10));

        return orderedArray;
    }

    exports.classifyTweetsSentiment = function(tweets) {
        var natural = require('natural');
        var classifier = new natural.BayesClassifier();

        var happyTweets = [];
        var noiseTweets = [];
        var sadTweets = [];

        var Classifier = Parse.Object.extend("Classifier");
        var classifier = new Parse.Query(Classifier);

        var restoredClassifier = natural.BayesClassifier.restore(localClassifier.classifier);

        for (var i = 0; i < tweets.length; i++) {
            var classifications = restoredClassifier.getClassifications(tweets[i].text);
            //console.log(classifications);
            if (classifications[0]['label'] == 'Positive') {
                happyTweets.push(tweets[i]);
            } else if (classifications[0]['label'] == 'Negative') {
                sadTweets.push(tweets[i]);
            } else if (classifications[0]['label'] == 'undefined') {
                noiseTweets.push(tweets[i]);
            }
        };

        //console.log(noiseTweets);
        // returnWords(happyTweets);
        // returnWords(noiseTweets);
        // returnWords(sadTweets);

        return {
            happytweets: happyTweets,
            noiseTweets: noiseTweets,
            sadTweets: sadTweets
        };


    }


})();
