(function() {

    //var classifier = require('./sentiment_classifier.json');
    var fs = require('fs');
    var natural = require('natural');

    var classifierString = JSON.parse(fs.readFileSync('sentiment_classifier.json', 'utf8'));
    var classifierObject = natural.BayesClassifier.restore(classifierString);

    exports.classifierString = classifierString;
    exports.classifierObject = classifierObject;

    //console.log(classifierString);
})();
