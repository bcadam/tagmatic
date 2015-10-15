var express = require('express');
var cors = require('cors');
var app = express();

// var React = require('react-native');
// var Parse = require('parse/react-native');
// var ParseReact = require('parse-react/react-native');

//Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


// var Parse = require('parse').Parse;
// var React = require('react/addons');
// var ParseReact = require('parse-react');
// Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');


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

// views is directory for all template files
//app.set('/views', __dirname + '/views');

app.use('/', express.static('public'));
app.use('/js', express.static('js'));
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
        //console.log('Data [%s]', data);

        //this line makes sure that everything goes into the json response all purty
        data = JSON.parse(data);

        statuses = data['statuses'];
        //console.log(statuses);


        //  Tweets data structure
        var tweets = [];

        for (var i = 0; i < statuses.length; i++) {
            //console.log(statuses[i]['text']);
            //tweets.push([statuses[i]['id'],statuses[i]['text'],statuses[i]['user']['id']]);
            tweets.push({
                "text": statuses[i]['text'],
                "tweetId": statuses[i]['id'],
                "userId": statuses[i]['user']['id'],
                "userScreenName": statuses[i]['user']['screen_name'],
                "userProfileImageUrl": statuses[i]['user']['profile_image_url']
            });

            // var parseCreate = ParseReact.Mutation.Create("Tweet", {
            //     text: statuses[i]['text'],
            //     tweetId: statuses[i]['id'],
            //     userId: statuses[i]['user']['id'],
            //     userScreenName: statuses[i]['user']['screen_name'],
            //     userProfileImageUrl: statuses[i]['user']['profile_image_url']
            // });


        };

        // parseCreate.dispatch();

        res.json({
            twitterResponse: tweets
        });

    }

    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 3000 ? 1 : req.params.count);

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
