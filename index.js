var express = require('express');
var app = express();

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


app.get('/api/twitter', function(req, res) {
    res.json({
        message: 'Try these routes from here twitter/user/:username'
    });
});


app.get('/api/twitter/user/:user', function(req, res) {
    var error = function(err, response, body) {
        console.log('ERROR [%s]', err);
    };

    var success = function(data) {
        console.log('Data [%s]', data);

        //this line makes sure that everything goes into the json response all purty
        data = JSON.parse(data);

        res.json({
            data: data['statuses'][0].user.screen_name
        });

    }

    var user = req.params.user;
    var Twitter = require('twitter-node-client').Twitter;
    var twitter = new Twitter(app.locals.twitterConfig);

    // twitter.getSearch({
    //     'q': '#haiku',
    //     'count': 2
    // }, error, success);
	

	twitter.getSearch({'q':'scary movie', 'count': 10, 'result\_type':'popular'}, error, success);



});

//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.listen(app.get('port'), function() {
    console.log('TagMatic is running on port', app.get('port'));
});
