var fs = require('fs');
    elasticClient.indices.getMapping({
        index: 'twitter'
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log(response);
            var response = JSON.stringify(response)
            fs.writeFile("file of mappings", response, 'utf8', function() {
                //console.log("File Saved as: " + timeString);
            });
        }
    });
    elasticClient.indices.create({
        index: "twitter",
        body: body
    }, function (err, resp, respcode) {
        console.log(err, resp, respcode);
        res.json({
            tweets: err
        });
    });
    elasticClient.indices.delete({
        index: "twitter"
    }, function (err, resp, respcode) {
        console.log(err, resp, respcode);
        res.json({
            tweets: resp
        });
    });
    elasticClient.indices.putMapping({
        index: "twitter",
        type: "tweet",
        body: body
    }, function(err, resp, respcode) {
        console.log(err, resp, respcode);

        //, "format" : "EE MMM d HH:mm:ss Z yyyy"
        res.json({
            tweets: err
        });
    });




var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: '99U4wZ1wPFmuVE0qWmi7fTllB',
    consumer_secret: 'U54J0wDK4YPtYmNzV9GcofrHZqs5bgMgVfsvnWLBpPF6dULpO9',
    access_token_key: '312687274-zhuIwxkbJtuvy4Qe93tZ26W2KqQRK0BS4SE7cR26',
    access_token_secret: 'cBeATWgQQpUJOZIstdrEE3PLLpAcjfhQPIIQTHzx1EQDK'
});

var params = {
    track: "twitter",
    result_type: "popular",
    language: "en"
};


client.stream('statuses/filter', params, function(stream) {
    console.log("Open Stream");
    stream.on('data', function(tweet) {
        console.log(tweet.user.screen_name);
        console.log(tweet.text);
        socket.emit('start stream', {
            hello: 'world'
        });
    });
    stream.on('error', function(error) {
        console.log(error);
    });
});



 elasticClient.search({
            index: 'twitter',
            type: 'tweet',
            size: count,
            body: {
                fields: ['_source'],
                query: {
        filtered: {
            query: {
                match: {
                        _all: needle
                    }
            },
            filter: {
                and: [
                    // {
                    //     range : {
                    //         created_at : { 
                    //             from : "now-1h", 
                    //             to : "now"
                    //         }
                    //     },
                    // }
                    {
                        filter : {
                            iso_language_code : "en"
                        }
                    }
                ]
            }
        }
    }
            }
        })