var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var Twitter = require('twitter-node-client').Twitter;

var TwitterPull = React.createClass({

    render: function() {
        // Render the text of each comment as a list item

        // var error = function(err, response, body) {
        //     console.log('ERROR [%s]', err);
        // };
        // var success = function(data) {
        //     console.log('Data [%s]', data);
        // };

        // var config = {
        //     "consumerKey": "99U4wZ1wPFmuVE0qWmi7fTllB",
        //     "consumerSecret": "U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9",
        //     "accessToken": "312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26",
        //     "accessTokenSecret": "cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK",
        //     "callBackUrl": "https://tagmatic.herokuapp.com/"
        // }

        // var twitter = new Twitter(config);

        // twitter.getSearch({
        //     'q': '#haiku',
        //     'count': 10
        // }, error, success);

        // console.log(twitter);

        return (
            <div>Let us do this</div>
        );
    }



});


module.exports = TwitterPull;
