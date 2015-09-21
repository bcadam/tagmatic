var Parse = require('parse').Parse;
var React = require('react');
var BoltList = require('./BoltList.react.js');
var ParseReact = require('parse-react');


var UserProfile = React.createClass({
  mixins: [ParseReact.Mixin],
  observe: function() {
    // Subscribe to all Comment objects, ordered by creation date
    // The results will be available at this.data.comments
    //comments: (new Parse.Query('BoltItem')).equalTo("user",Parse.User.current()).ascending('createdAt')
    return {
      bolts: (new Parse.Query('BoltItem')).descending('createdAt')
    };
  },
      getInitialState: function() {
        return {
          user: Parse.User.current()
        };
      },
      render: function() {
        var user = this.state.user;
      	var email = user.get('email');

        return (
        <div className="col-sm-3 well">
				<div className="col-sm-12">Forwarding email: {email}</div>
        <div className="col-sm-12">Number of Bolts: {this.data.bolts.length}</div>
        </div>
          );
      }
      
      });


module.exports = UserProfile;