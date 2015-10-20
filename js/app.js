var React = require('react');
var Parse = require('parse');

var TagMaticApp = require('./TagMaticApp.react.js');


var TwitterPull = require('./TwitterPull.react.js');




// Connection URL
var url = 'mongodb://heroku_fmnvd22w:o92tek028huob675crb78fvepj@ds041934.mongolab.com:41934/heroku_fmnvd22w';

var MongoClient = require('mongoose').MongoClient
  , assert = require('assert');
// Connection URL 
// Use connect method to connect to the Server
var myDb;
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  //db.close();
  myDb = db;
});



// Insert your app's keys here:
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');

// Parse.Cloud.run('averageStars', { movie: 'The Matrix' }, {
//   success: function(ratings) {
//     // ratings should be 4.5
//     console.log(ratings);
//   },
//   error: function(error) {
//   }
// });

React.render(
    <TagMaticApp />,
    document.getElementById('app')
);
