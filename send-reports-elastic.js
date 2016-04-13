var Parse = require('parse/node').Parse;
var Papa = require('babyparse');
var Blob = require('blob');
var fs = require('fs');
var discoverEngine = require('./customerdiscovery');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('zYrJvetHxH4ZIpyztJM4NQ');
var elasticsearch = require('elasticsearch');



var client = new elasticsearch.Client({
    host: 'search-tagmatic-37f3redwytadtwnjdlot3gxeyi.us-east-1.es.amazonaws.com',
    log: 'trace'
});


client.count(function(error, response, status) {
    var count = response.count;
    //console.log(count);
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');
// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var url = 'mongodb://adminuser:adminuseradminuser123@ds043324.mongolab.com:43324/tagmatic';
// var myDb;
// var url = 'mongodb://adminuser:adminuseradminuser123@128.122.36.72:27017/tagmatic';
// var url = 'mongodb://adminuser:adminuseradminuser123@localhost:27017/tagmatic';
// var mongodb = require('mongodb-then');
// var db = mongodb(url, [
//     'Query', 'Tweet', 'Test'
// ]);

function sendReports() {


    var Report = Parse.Object.extend("Report");
    var queryReport = new Parse.Query(Report);

    queryReport.include("user");
    queryReport.include("classifier");
    queryReport.equalTo("published", true);

    var results;

    queryReport.find({
        success: function(foundReports) {

            results = foundReports;

        },
        error: function(error) {
            console.log("Error: " + error.code + " " + error.message);
        }
    }).then(function() {



        for (var i = 0; i < results.length; i++) {

            var userEmail = results[i].get('user').get('email');
            //console.log(userEmail);

            var queryText = results[i].get('query');
            var queryObject = results[i];
            console.log(queryText);

            client.search({
                index: 'twitter',
                type: 'tweet',
                size: 1,
                body: {
                    fields: ['_source'],
                    query: {
                        match: {
                            _all: queryText
                        }
                    }
                }
            }).then(function(resp) {

                var tweets = resp.hits.hits;

                //var queryText = results[i].get('query');
                //console.log(queryObject);
                //console.log(tweets.length);
                var processedTweets = [];
                for (var y = 0; y < tweets.length; y++) {
                    processedTweets.push(tweets[y]._source);
                };

                console.log(queryText);

                //processedTweets;

                // console.log("done");
                // console.log(processedTweets[0].text);

                //console.log(queryText + " report");
                // // discoverEngine.returnLocations(processedTweets);
                // discoverEngine.returnWords(processedTweets);
                // discoverEngine.returnFollowers(processedTweets);
                // discoverEngine.classifyTweetsSentiment(processedTweets);
                // data = Papa.unparse(processedTweets);
                // processedTweets[0].text;
                // var time = new Date();
                // var timeString = "TagMatic " + queryText + " " + time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear() + ".csv";
                // fs.writeFile(timeString, data, 'utf8', function() {
                //     console.log("File Saved as: " + timeString);
                // });
                //sendEmail(userEmail, timeString, data);
                

            }, function(err) {
                console.trace(err.message);
            });


        };


    });


}

function sendEmail(toAddress, fileName, file) {
    var message = {
        "html": "<p>Example HTML content</p>",
        "text": "Example text content",
        "subject": "example subject",
        "from_email": "info@rooftop.me",
        "from_name": "TagMatic",
        "to": [{
            "email": toAddress
        }],
        "headers": {
            "Reply-To": "info@rooftop.me"
        },
        "important": false,
        "track_opens": null,
        "track_clicks": null,
        "auto_text": null,
        "auto_html": null,
        "inline_css": null,
        "url_strip_qs": null,
        "preserve_recipients": null,
        "view_content_link": null,
        "bcc_address": "message.bcc_address@example.com",
        "tracking_domain": null,
        "signing_domain": null,
        "return_path_domain": null,
        "merge": true,
        "merge_language": "mailchimp",
        "global_merge_vars": [{
            "name": "merge1",
            "content": "merge1 content"
        }],
        "merge_vars": [{
            "rcpt": "recipient.email@example.com",
            "vars": [{
                "name": "merge2",
                "content": "merge2 content"
            }]
        }],
        "tags": [
            "password-resets"
        ],
        "subaccount": "customer-123",
        "google_analytics_domains": [
            "example.com"
        ],
        "google_analytics_campaign": "message.from_email@example.com",
        "metadata": {
            "website": "www.example.com"
        },
        "recipient_metadata": [{
            "rcpt": "recipient.email@example.com",
            "values": {
                "user_id": 123456
            }
        }],
        "attachments": [{
            "type": "text/plain",
            "name": "fileName",
            "content": file
        }],
        "images": [{
            "type": "image/png",
            "name": "IMAGECID",
            "content": "ZXhhbXBsZSBmaWxl"
        }]
    };
    var async = false;
    var ip_pool = "Main Pool";
    var dateString = "2015-11-22 01:01:01";


    var send_at = dateString;
    mandrill_client.messages.send({
        "message": message,
        "async": async,
        "ip_pool": ip_pool
    }, function(result) {
        console.log(result);
        /*
        [{
                "email": "recipient.email@example.com",
                "status": "sent",
                "reject_reason": "hard-bounce",
                "_id": "abc123abc123abc123abc123abc123"
            }]
        */
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}


sendReports();
