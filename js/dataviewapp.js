var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');



var DataView = require('./DataView.react.js');

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');



ReactDOM.render(
    <DataView />,
    document.getElementById('app')
);
