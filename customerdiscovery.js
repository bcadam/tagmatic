(function() {

    var natural = require('natural');
    var localClassifier = require('./localclassifier');
    var pos = require('pos');

    function sortByOccurrence(arrayOfData) {
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

        finalArray = exports.combineBasedOnSimilarityOfString(finalArray, .93);
        return finalArray;
    }

    function cleanJunkWords(arrayOfData) {

        var wordsToDelete = ["it's","into", "ha", "as", "of", "the", "&amp;", "if", "was", "she", "a", "it", "how", "rt", "a", "de", "la", "i", "in", "my", "to", "the", "no", "at", "el", "en", "que", "you", "+", "per", "for", "on", "-", "their", "and", "we", "with", "is", "del"];

        for (var i = 0; i < arrayOfData.length; i++) {
            for (var y = 0; y < wordsToDelete.length; y++) {
                //console.log(wordsToDelete[y]);
                //console.log(arrayOfData[i][0]);
                // console.log(arrayOfData[i][0] + "  " + wordsToDelete[y]);
                if (arrayOfData[i][0].toLowerCase() == wordsToDelete[y]) {
                    arrayOfData.splice(i, 1);
                }
            };
        };
        console.log(arrayOfData);
        return arrayOfData;
    }

    // Example input 
    // [['cat',2],['cats',2],['dog',1]]
    // Example output
    // [['cat',4],['dog',1]]
    exports.combineBasedOnSimilarityOfString = function(words, distanceForSame) {
        var arrayOfMatches = [];
        for (var i = 0; i < words.length; i++) {
            for (var j = i + 1; j < words.length; j++) {
                var distance = natural.JaroWinklerDistance(words[i][0], words[j][0]);
                if (distance > distanceForSame) {
                    words[i][1] = words[i][1] + words[j][1];
                    words.splice(j, 0);
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

        var finalArray = sortByOccurrence(locations);
        //console.log(finalArray.splice(0, 5));
        return finalArray;
    }

    exports.returnWords = function(tweets) {

        var textOfTweets = [];
        for (var i = 0; i < tweets.length; i++) {
            var holder = tweets[i].text.split(' ');
            for (var y = 0; y < holder.length; y++) {
                textOfTweets.push(holder[y].toLowerCase());
            };
        };

        for (var i = 0; i < textOfTweets.length; i++) {
            if (textOfTweets[i].indexOf('.') == textOfTweets[i].length - 1) {
                textOfTweets[i] = textOfTweets[i].slice(0, textOfTweets[i].length - 1);
            }
            if (textOfTweets[i].indexOf('#') == 0) {
                textOfTweets[i] = textOfTweets[i].slice(1, textOfTweets[i].length);
            }
        };

        textOfTweets = sortByOccurrence(textOfTweets);
        textOfTweets = cleanJunkWords(textOfTweets);
        //console.log(finalArray.slice(0, 10));
        return textOfTweets;
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

        var finalArray = sortByOccurrence(bucketedFollowers);
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

    // Example Response
    // { verb: [],
    // noun: 
    //  [ [ 'cat', 4 ],
    //    [ '/', 3 ],
    //    [ 'dancer', 2 ],
    //    [ 'interactive', 1 ],
    //    [ 'toy', 1 ],
    //    [ 'products', 1 ],
    //    [ 'xqzu', 1 ],
    //    [ 'charmer', 1 ],
    //    [ 't', 1 ],
    //    [ 'co', 1 ],
    //    [ 'jwrfo', 1 ],
    //    [ 'https', 1 ] ],
    // adverb: [],
    // adjective: [],
    // modal: [],
    // interjection: [],
    // foreign: [],
    // url: [],
    // other: 
    //  [ [ '2', 1 ],
    //    [ '301', 1 ],
    //    [ 'by', 1 ],
    //    [ '-', 1 ],
    //    [ ':', 1 ],
    //    [ '.', 1 ] ] }
    exports.partsOfSpeech = function(tweets) {
        if (tweets.length == null) {
            return null;
        }
        var partsOfSpeechObject = {
            conjunction: [],
            cardinal: [],
            foreign: [],
            preposition: [],
            adjective: [],
            modal: [],
            noun: [],
            possessive: [],
            personal: [],
            adverb: [],
            symbol: [],
            interjection: [],
            url: [],
            verb: [],
            other: []
        };
        for (var i = 0; i < tweets.length; i++) {
            var words = new pos.Lexer().lex(tweets[i].text);
            var tagger = new pos.Tagger();
            var taggedWords = tagger.tag(words);
            for (y in taggedWords) {
                var taggedWord = taggedWords[y];
                var word = taggedWord[0];
                var tag = taggedWord[1];
                //console.log(word + " /" + tag);
                if (!tag.indexOf('VB')) {
                    partsOfSpeechObject.verb.push([word.toLowerCase()]);
                } else if (!tag.indexOf('NN')) {
                    partsOfSpeechObject.noun.push([word.toLowerCase()]);
                } else if (!tag.indexOf('JJ')) {
                    partsOfSpeechObject.adjective.push([word.toLowerCase()]);
                } else if (!tag.indexOf('RB')) {
                    partsOfSpeechObject.adverb.push([word.toLowerCase()]);
                } else if (!tag.indexOf('MD')) {
                    partsOfSpeechObject.modal.push([word.toLowerCase()]);
                } else if (!tag.indexOf('UH')) {
                    partsOfSpeechObject.interjection.push([word.toLowerCase()]);
                } else if (!tag.indexOf('FW')) {
                    partsOfSpeechObject.foreign.push([word.toLowerCase()]);
                } else if (!tag.indexOf('URL')) {
                    partsOfSpeechObject.url.push([word.toLowerCase()]);
                } else if (!tag.indexOf('CC')) {
                    partsOfSpeechObject.conjunction.push([word.toLowerCase()]);
                } else if (!tag.indexOf('CD')) {
                    partsOfSpeechObject.cardinal.push([word.toLowerCase()]);
                } else if (!tag.indexOf('IN')) {
                    partsOfSpeechObject.preposition.push([word.toLowerCase()]);
                } else if (!tag.indexOf('POS')) {
                    partsOfSpeechObject.possessive.push([word.toLowerCase()]);
                } else if (!tag.indexOf('PRP')) {
                    partsOfSpeechObject.personal.push([word.toLowerCase()]);
                } else if (!tag.indexOf('SYM')) {
                    partsOfSpeechObject.symbol.push([word.toLowerCase()]);
                } else {
                    partsOfSpeechObject.other.push([word.toLowerCase()]);
                }
                //console.log(word);
            }
        };
        partsOfSpeechObject.conjunction = sortByOccurrence(partsOfSpeechObject.conjunction);
        partsOfSpeechObject.cardinal = sortByOccurrence(partsOfSpeechObject.cardinal);
        partsOfSpeechObject.foreign = sortByOccurrence(partsOfSpeechObject.foreign);
        partsOfSpeechObject.preposition = sortByOccurrence(partsOfSpeechObject.preposition);
        partsOfSpeechObject.adjective = sortByOccurrence(partsOfSpeechObject.adjective);
        partsOfSpeechObject.modal = sortByOccurrence(partsOfSpeechObject.modal);
        partsOfSpeechObject.noun = sortByOccurrence(partsOfSpeechObject.noun);
        partsOfSpeechObject.possessive = sortByOccurrence(partsOfSpeechObject.possessive);
        partsOfSpeechObject.personal = sortByOccurrence(partsOfSpeechObject.personal);
        partsOfSpeechObject.adverb = sortByOccurrence(partsOfSpeechObject.adverb);
        partsOfSpeechObject.symbol = sortByOccurrence(partsOfSpeechObject.symbol);
        partsOfSpeechObject.interjection = sortByOccurrence(partsOfSpeechObject.interjection);
        partsOfSpeechObject.url = sortByOccurrence(partsOfSpeechObject.url);
        partsOfSpeechObject.verb = sortByOccurrence(partsOfSpeechObject.verb);
        partsOfSpeechObject.other = sortByOccurrence(partsOfSpeechObject.other).splice(0, 100);
        //console.log(partsOfSpeechObject);
        return partsOfSpeechObject;
    }
    exports.classifyTweetsSentiment = function(tweets) {
        // var natural = require('natural');
        // var classifier = new natural.BayesClassifier();

        var happyTweets = [];
        var noiseTweets = [];
        var sadTweets = [];

        for (var i = 0; i < tweets.length; i++) {
            var classifications = localClassifier.classifierObject.getClassifications(tweets[i].text);
            //console.log(classifications);
            if (classifications[0]['label'] == 'Positive') {
                happyTweets.push(tweets[i]);
            } else if (classifications[0]['label'] == 'Negative') {
                sadTweets.push(tweets[i]);
            } else if (classifications[0]['label'] == 'Neutral') {
                noiseTweets.push(tweets[i]);
            }
        };

        //console.log(noiseTweets);
        // returnWords(happyTweets);
        // returnWords(noiseTweets);
        // returnWords(sadTweets);

        console.log(happyTweets.length);
        console.log(noiseTweets.length);
        console.log(sadTweets.length);

        return {
            happyTweets: happyTweets,
            noiseTweets: noiseTweets,
            sadTweets: sadTweets
        };
    }
})();
