var express = require('express');
var cors = require('cors');
var app = express();
var Parse = require('parse/node').Parse;


// var React = require('react-native');
// var Parse = require('parse/react-native');
//var ParseReact = require('parse-react');

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

Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function twitterSearch(req, res) {
    var error = function(err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function(data) {
        //this line makes sure that everything goes into the json response all purty
        data = JSON.parse(data);
        data = data['statuses'];
        res.json({
            twitterResponse: data
        });

        var Query = Parse.Object.extend("Query");
        var query = new Parse.Query(Query);
        query.equalTo("searchedFor", req.params.query);
        query.find({
            success: function(results) {
                var size = Object.size(results);
                if (size > 0) {
                    //console.log("fire and found query");
                    //console.log(results[0]);
                    processTweets(data, results[0]);
                }
                if (size == 0) {

                    var Query = Parse.Object.extend("Query");
                    var query = new Query();
                    query.set("searchedFor", req.params.query);
                    query.save(null, {
                        success: function(query) {
                            // console.log("query");
                            // console.log(query);
                            //console.log("fire and did not find query");
                            //console.log(query);
                            processTweets(data, query);
                        },
                        error: function(query, error) {
                            // Execute any logic that should take place if the save fails.
                            // error is a Parse.Error with an error code and message.
                            //alert('Failed to create new object, with error code: ' + error.message);
                        }
                    });
                }


            },
            error: function(error) {
                //alert("Error: " + error.code + " " + error.message);
            }
        });


        //processTweets(data, "results[0]");

    }

    var query = req.params.query;
    var count = (req.params.count == null || req.params.count > 100 ? 100 : req.params.count);
    var Twitter = require('twitter-node-client').Twitter;
    var twitter = new Twitter(app.locals.twitterConfig);
    twitter.getSearch({
        'q': query,
        'count': count
    }, error, success);
}

function processTweets(data, query) {
    console.log("query");
    console.log(query);

    var Tweet = Parse.Object.extend("Tweet");
    var tweetArray = [];
    var size = Object.size(data);
    for (var i = 0; i <= size - 1; i++) {
        var Tweet = Parse.Object.extend("Tweet");
        var tweet = new Tweet();
        tweet.set("contributors", data[i]['contributors']);
        tweet.set("coordinates", data[i]['coordinates']);
        tweet.set("created_at", data[i]['created_at']);
        tweet.set("entities", data[i]['entities']);
        tweet.set("favorite_count", data[i]['favorite_count']);
        tweet.set("favorited", data[i]['favorited']);
        tweet.set("geo", data[i]['geo']);
        //tweet.set("id", data[i]['id']);
        tweet.set("id_str", data[i]['id_str']);
        tweet.set("in_reply_to_screen_name", data[i]['in_reply_to_screen_name']);
        tweet.set("in_reply_to_status_id", data[i]['in_reply_to_status_id']);
        tweet.set("in_reply_to_status_id_str", data[i]['in_reply_to_status_id_str']);
        tweet.set("in_reply_to_user_id", data[i]['in_reply_to_user_id']);
        tweet.set("in_reply_to_user_id_str", data[i]['in_reply_to_user_id_str']);
        tweet.set("is_quote_status", data[i]['is_quote_status']);
        tweet.set("lang", data[i]['lang']);
        tweet.set("metadata", data[i]['metadata']);
        tweet.set("place", data[i]['place']);
        tweet.set("possibly_sensitive", data[i]['possibly_sensitive']);
        tweet.set("retweet_count", data[i]['retweet_count']);
        tweet.set("retweeted", data[i]['retweeted']);
        tweet.set("retweeted_status", data[i]['retweeted_status']);
        tweet.set("source", data[i]['source']);
        tweet.set("text", data[i]['text']);
        tweet.set("truncated", data[i]['truncated']);
        tweet.set("user", data[i]['user']);
        tweetArray.push(tweet);
    }
    //return tweetArray;

    //console.log("about to enter the save all");

    Parse.Object.saveAll(tweetArray, {
        success: function(objs) {

            var size = Object.size(objs);
            console.log(size);
            // var relation = query.relation("tweets");

            // for (var i = 0; i < size - 1; i++) {

            //     relation.add(objs[i]);

            // }

            // query.save();


        },
        error: function(error) {}
    });


}
