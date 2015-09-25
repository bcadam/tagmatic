var React = require('react');
var Parse = require('parse');

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


var TagMaticApp = require('./TagMaticApp.react.js');

React.render(
    <TagMaticApp />,
    document.getElementById('app')
);
