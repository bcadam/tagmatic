var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react');


var Login = React.createClass({

      getInitialState: function() {
        return {
          email: '',
          password: '',
          user : Parse.User.current()
          };
      },
      handleChangePassword: function(event) {
        this.setState({password: event.target.value});
      },
      handleChangeEmail: function(event) {
        this.setState({email: event.target.value});
      },
      updateUser: function(newUser){
        this.setState({ user: newUser });
      },
      pushUser: function(event){
        this.props.handleChange(event);
      },
      onKeyDown: function(e) {
        var holder = this;
        if (e.keyCode === 13) {
          holder.handleSubmit();
          //alert("this");
        }
      },
      handleSubmit: function(){
        var email = this.state.email;
        var password = this.state.password;
        //alert("password is " + password + " and the email is " + email);

        var _newThis = this;

        Parse.User.logIn(email, password, {
          success: function(newUser) {
            // Do stuff after successful login.
            console.log("Success");
            _newThis.updateUser(newUser);
            _newThis.pushUser(newUser);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            //console.log(debug(error));
            alert("fail");
          }
        });

      },
      createAccount: function(){
        var emailHolder = this.state.email;
        var passwordHolder = this.state.password;
        //alert("password is " + password + " and the email is " + email);

        var _newThis = this;

        var user = new Parse.User();
        user.set("username", emailHolder);
        user.set("password", emailHolder);
        user.set("email", emailHolder);

        var acl = new Parse.ACL();
            acl.setPublicReadAccess(false);
            acl.setRoleReadAccess("Admin",true);
            acl.setRoleWriteAccess("Admin",false);

        user.set("ACL",acl);

        // other fields can be set just like with Parse.Object

        user.signUp(null, {
          success: function(newUser) {
            // Hooray! Let them use the app now.
            //alert("done");
            _newThis.updateUser(newUser);
            _newThis.pushUser(newUser);

            //alert(newUser.id);


          },
          error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            //alert("Error: " + error.code + " " + error.message);
            alert(error.message);
          }
        });

      },
      render: function() {
        var email = this.state.email;
        var password = this.state.password;
        var value = "cake";
        return (

          <form className="col-sm-8 col-sm-offset-2 form-horizontal" onKeyDown={this.onKeyDown}>
          <div className="form-group">
          <input placeholder="Email" className="form-control" type="text" value={email} onChange={this.handleChangeEmail} />
          <input placeholder="Password" className="form-control" type="password" value={password} onChange={this.handleChangePassword} />
          <input className="form-control btn btn-success" value="Login" onClick={this.handleSubmit} />
          </div>
          <div className="form-group">
          <input className="form-control col-sm-12 btn btn-warning" value="Create Account" onClick={this.createAccount} />
          </div>
          </form>
          );
      }
      
      });


module.exports = Login;