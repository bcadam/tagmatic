Parse.Cloud.afterSave(Parse.User, function(request) {

    /////////////// send email tester
    Parse.Cloud.httpRequest({
        method: "POST",
        url: "https://api:" + "key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4" + "@api.mailgun.net/v2/" + "emailbolt.com" + "/messages",
        body: {
            //to: request.object.get('email'),
            to: "info@emailbolt.com",
            from: "info@emailbolt.com",
            subject: "EmailBolt Signup",
            text: "This email has been used to signup at EmailBolt.com with "
        }
    }).then(function(httpResponse) {
        console.log(httpResponse.text);
    }, function(httpResponse) {
        console.error('Request failed with response code ' + httpResponse.status);
    });
    ///////// end of tester
});


var Tweet = Parse.Object.extend("Tweet");
Parse.Cloud.beforeSave("Tweet", function(request, response) {
    if (!request.object.get("id_str")) {
        response.error('A Tweet must have a id_str.');
    } else {
        var query = new Parse.Query(Tweet);
        query.equalTo("id_str", request.object.get("id_str"));
        query.first({
            success: function(object) {
                if (object) {
                    response.error("A Tweet with this id_str already exists.");
                } else {
                    response.success();
                }
            },
            error: function(error) {
                response.error("Could not validate uniqueness for this Tweet object.");
            }
        });
    }
});

var Query = Parse.Object.extend("Query");
Parse.Cloud.beforeSave("Query", function(request, response) {
    if (!request.object.get("searchValue")) {
        response.error('A Query must have a id_str.');
    } else {
        var query = new Parse.Query(Query);
        query.equalTo("searchValue", request.object.get("searchValue"));
        query.first({
            success: function(object) {
                if (object) {
                    response.error("A Query with this searchValue already exists.");
                } else {
                    response.success();
                }
            },
            error: function(error) {
                response.error("Could not validate uniqueness for this Query object.");
            }
        });
    }
});
