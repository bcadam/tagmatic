var Parse = require('parse').Parse;
var React = require('react');
var BoltList = require('./BoltList.react.js');
var Login = require('./Login.react.js');
var Header = require('./Header.react.js');
var UserProfile = require('./UserProfile.react.js');
var List = require('./List.react.js');


var EmailBoltApp = React.createClass({

      getInitialState: function() {
        return ({
          user: Parse.User.current()
          });
      },
       handleChange: function(event) {
        this.setState({user: event});
      },
      render: function() {
        var user = this.state.user;

        console.log(user);

        var body;

        if (user == null) {
          body = <Login user={user} handleChange={this.handleChange} />;
        
          return (
          <div>
          <Header user={user} />
          {body}
          </div>
          );




        } else {
        
        //body = <BoltList className="col-sm-8" user={user} />;
        //body = <List />
        body = <List className="col-sm-12"/>

        return (
          <div>
          <Header user={user} />
          <div className="col-sm-12">
          <UserProfile className="col-sm-12" />
          {body}
          </div>
          </div>
          );
        }

        
        
        
        

      }
      
      });


module.exports = EmailBoltApp;