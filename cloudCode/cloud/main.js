// Parse.Cloud.beforeSave("BoltItem", function(request, response) {

//   	console.log("done");
//   	response.success;

// });



// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.afterDelete("BoltItem", function(request, response) {



	response.success();

});



Parse.Cloud.afterSave("BoltItem", function(request) {

	

	});


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