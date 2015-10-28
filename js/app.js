var React = require('react');
var Parse = require('parse');

var OneMonarch = require('./TagMaticApp.react.js');


var TwitterPull = require('./TwitterPull.react.js');



// Connection URL 
var url = 'mongodb://heroku_fmnvd22w:o92tek028huob675crb78fvepj@ds041934.mongolab.com:41934/heroku_fmnvd22w';

//var myDb = require('mongolab-provider').init('heroku_fmnvd22w', 'Vy94bRY1c4WizezbKV65B8OtWqc=');



// Insert your app's keys here:
Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');

var Alert = require('react-bootstrap').Alert;




React.render(
    <OneMonarch />,
    document.getElementById('app')
);
