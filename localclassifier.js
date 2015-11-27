(function() {

//var classifier = require('./sentiment_classifier.json');
var fs = require('fs');
var classifier = JSON.parse(fs.readFileSync('sentiment_classifier.json', 'utf8'));

exports.classifier = classifier;
console.log(classifier);

})();
