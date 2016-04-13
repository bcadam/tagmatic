(function() {

    var pos = require('pos');

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

        // finalArray = exports.combineBasedOnSimilarityOfString(finalArray,.93);
        return finalArray;
    }

    exports.partsOfSpeech = function(tweets) {

        if (tweets.length == null) {
            return null;
        }

        var partsOfSpeechObject = {
            verb: [],
            noun: [],
            adverb: [],
            adjective: [],
            modal: [],
            interjection: [],
            foreign: [],
            url: [],
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
                } else {
                    partsOfSpeechObject.other.push([word.toLowerCase()]);
                }
                //console.log(word);
            }

        };

        partsOfSpeechObject.verb = sortByOccurence(partsOfSpeechObject.verb);
        partsOfSpeechObject.noun = sortByOccurence(partsOfSpeechObject.noun);
        partsOfSpeechObject.adverb = sortByOccurence(partsOfSpeechObject.adverb);
        partsOfSpeechObject.adjective = sortByOccurence(partsOfSpeechObject.adjective);
        partsOfSpeechObject.modal = sortByOccurence(partsOfSpeechObject.modal);
        partsOfSpeechObject.interjection = sortByOccurence(partsOfSpeechObject.interjection);
        partsOfSpeechObject.foreign = sortByOccurence(partsOfSpeechObject.foreign);
        partsOfSpeechObject.url = sortByOccurence(partsOfSpeechObject.url);
        partsOfSpeechObject.other = sortByOccurence(partsOfSpeechObject.other);

        return partsOfSpeechObject;
    }



})();
