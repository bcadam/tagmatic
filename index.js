var express = require('express');
var cors = require('cors');
var app = express();
var Parse = require('parse/node').Parse;


// var React = require('react-native');
// var Parse = require('parse/react-native');
var ParseReact = require('parse-react');

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');

app.locals.title = 'TagMatic';
app.locals.email = 'adam.cragg@gmail.com';

app.locals.twitterConfig = {
    "consumerKey": "99U4wZ1wPFmuVE0qWmi7fTllB",
    "consumerSecret": "U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9",
    "accessToken": "312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26",
    "accessTokenSecret": "cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK",
    "callBackUrl": "https://tagmatic.herokuapp.com/"
};


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/', express.static('public'));
//app.use('/js', express.static('js'));
app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
//app.use('/bootstrap', express.static('bootstrap'));


app.get('/api/twitter', cors(), function(req, res) {
    res.json({
        message: 'Try these routes from here twitter/user/:username'
    });
});


app.get('/api/twitter/search/:query/:count?', cors(), function(req, res) {
    twitterSearch(req, res);
});


app.listen(app.get('port'), function() {
    console.log('TagMatic is running on port', app.get('port'));
});


function twitterSearch(req, res) {

    var error = function(err, response, body) {
        console.log('ERROR [%s]', err);
    };

    var success = function(data) {
        //this line makes sure that everything goes into the json response all purty
        data = JSON.parse(data);

        //Saves all of the tweets to database.
        // var batch = new ParseReact.Mutation.Batch();
        // var size = Object.size(data);
        // for (var i = 0; i < size; i++) {

        //     var currentTweet = data[i];
        //     var creator = ParseReact.Mutation.Create('Tweet', currentTweet);
        //     creator.dispatch({
        //         batch: batch
        //     });

        // };
        // batch.dispatch();


        res.json({
            twitterResponse: data['statuses']
        });

    }

    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 50 ? 1 : req.params.count);

    var Twitter = require('twitter-node-client').Twitter;
    var twitter = new Twitter(app.locals.twitterConfig);

    // twitter.getSearch({
    //     'q': '#haiku',
    //     'count': 2
    // }, error, success);

    twitter.getSearch({
        'q': query,
        'count': count
    }, error, success);
}
