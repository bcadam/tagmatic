// Parse.Cloud.beforeSave("BoltItem", function(request, response) {

//   	console.log("done");
//   	response.success;

// });



// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.afterDelete("BoltItem", function(request, response) {

	var _apiKey = "key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4";
	var routeId = request.object.get("routeId");
	routeId = JSON.stringify(routeId);
	routeId = JSON.parse(routeId);
	routeId = routeId.route.id;


	// Parse.Cloud.httpRequest({
 //    method: "POST",
 //    url: "https://api:" + "key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4" + "@api.mailgun.net/v2/" + "emailbolt.com" + "/messages",
 //    body: {
 //        to: "adam.cragg@gmail.com",
 //        from: "CloudCode@parse.com",
 //        subject: routeId + " deleted",
 //        text: "https://api:key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4@api.mailgun.net/v3/routes/" + routeId
 //    }
	// }).then(function(httpResponse) {
	//   console.log(httpResponse.text);
	// }, function(httpResponse) {
	//   console.error('Request failed with response code ' + httpResponse.status);
	// });

	Parse.Cloud.httpRequest({
	   method: 'DELETE',
	   url: "https://api:key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4@api.mailgun.net/v3/routes/" + routeId,
	   success: function(httpResponse) {
	        console.log('Delete succeeded  ' + httpResponse.text);
	   },
	   error: function(httpResponse) {
	            console.error('Delete failed with response code ' + httpResponse.status);
	   }
	   }) ;


	response.success();

});



Parse.Cloud.afterSave("BoltItem", function(request) {

	var target = request.object.get("text");
	var owner = request.object.get("user");
	var ownerEmail = owner.get("email");
	var _apiKey = "key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4";
	var _domainName = "emailbolt.com";
	var BoltId = request.object.id;
	var routeId;
	var response;

	var person = {firstName:"John", lastName:"Doe", age:46};
	var name = person["firstName"];

	if (request.object.get('routeId') == null)
	{
	Parse.Cloud.httpRequest({
    method: "POST",
    url: "https://api:" + _apiKey + "@api.mailgun.net/v3/routes",
    body: {
        priority: 50,
        description: 'Target: ' + target,
        expression: 'match_recipient("' + target + '@emailbolt.com")',
        action: "forward('" + ownerEmail + "')"
    }
	})
	.then(function(httpResponse) {
	  	console.log(httpResponse.text);

	  	response = httpResponse.text;
	  	response = JSON.parse(response);

	  	request.object.set("routeId", response);
		request.object.save();


	/////////////// send email tester
	// Parse.Cloud.httpRequest({
 //    method: "POST",
 //    url: "https://api:" + "key-1ytwinacpa11k-yg2e8xtjz5dy2myxk4" + "@api.mailgun.net/v2/" + "emailbolt.com" + "/messages",
 //    body: {
 //        to: "adam.cragg@gmail.com",
 //        from: "CloudCode@parse.com",
 //        subject: BoltId,
 //        text: response
 //    }
	// }).then(function(httpResponse) {
	//   console.log(httpResponse.text);
	// }, function(httpResponse) {
	//   console.error('Request failed with response code ' + httpResponse.status);
	// });
	///////// end of tester


	}, function(httpResponse) {
	  console.error('Request failed with response code ' + httpResponse.status);
	});

	}

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