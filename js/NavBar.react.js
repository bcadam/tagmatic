var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react/addons');


var NavBar = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ParseReact.Mixin],
    observe: function() {
        // Subscribe to all Comment objects, ordered by creation date
        // The results will be available at this.data.comments
        var query;
        var user = Parse.User.current();

        if (user) {
            var query = (new Parse.Query('Project')).ascending("createdAt");
        } else {
            var query = (new Parse.Query('Project')).equalTo('_User', user).ascending("createdAt");
        }

        return {
            projects: query
        };
    },
    getInitialState: function() {
        return ({
            menu: false,
            projects: [],
            user: Parse.User.current()
        });
    },
    _onChangeUsername: function(e) {
        this.setState({
            username: e.target.value
        });
    },
    _onChangePassword: function(e) {
        this.setState({
            password: e.target.value
        });
    },
    _logIn: function() {
        var self = this;

        Parse.User.logIn(self.state.username, self.state.password, {
            success: function(user) {
                // Do stuff after successful login.
                self.props.user.requestChange(user);
                self.setState({
                    user: user
                });
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
                console.log(error);
            }
        });

    },
    _logOut: function() {
        var self = this;
        Parse.User.logOut();
        self.props.user.requestChange(null);
        self.setState({
            user: null
        });

    },
    _createAccount: function() {
        var self = this;

        var user = new Parse.User();
        user.set("username", self.state.username);
        user.set("password", self.state.password);
        user.set("email", self.state.username);

        // other fields can be set just like with Parse.Object
        // user.set("phone", "415-392-0202");

        user.signUp(null, {
            success: function(user) {
                // Hooray! Let them use the app now.
                self.props.user.requestChange(user);
                self.setState({
                    user: user
                });
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });


    },
    render: function() {
        var self = this;

        var navContainer = {
            backgroundColor: 'white',
            borderRight: '1px solid #efefef',
            overflow: 'hidden',
            position: 'fixed',
            width: '0px',
            bottom: '0',
            top: '0',
            left: '0',
            WebkitTransition: 'all 200ms ease',
            transition: 'all 200ms ease'
        }

        var navBar = {
            backgroundColor: 'white',
            borderColor: 'black black #efefef',
            borderStyle: 'none none solid',
            borderWidth: '1px',
            position: 'relative',
            zIndex: '1000'
        }

        var navButton = {
            borderRight: '1px solid #efefef',
            cursor: 'pointer',
            float: 'left',
            fontSize: '24px',
            padding: '18px',
            position: 'relative',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            tapHighlightColor: 'rgba(0, 0, 0, 0)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none',
            WebkitTransition: 'all 200ms ease',
            transition: 'all 200ms ease'
        }

        var brandText = {
            color: 'black',
            fontFamily: 'Varela, sans-serif',
            fontWeight: '400',
            marginLeft: '20px',
            marginTop: '25px'
        }

        var closeMenu = {
            margin: '20px 15px',
        }

        var navMenu = {
            width: (this.state.menu ? '200px' : '0px')
        }

        var fullWidth = {
            width: "100%",
            textAlign: 'center'
        }

        var button;
        // console.log(self.props.user.value);
        // console.log("self.state.user.value");
        if (self.state.user == null) {
            button = (
                <div>
              <div className="form-group">
              <input onChange={self._onChangeUsername} className="form-control" type="text" placeholder="Email"/>
              </div>
              <div className="form-group">
              <input onChange={self._onChangePassword} className="form-control" type="password" placeholder="Password"/>
              </div>
              <div className="form-group">
              <div className="btn btn-success" onClick={self._logIn} style={fullWidth}>Log In</div>
              </div>
              <div className="form-group">
              <div className="btn btn-warning" onClick={self._createAccount} style={fullWidth}>Create Account</div>
              </div>
              </div>
            );

        } else {
            button = <div className="btn btn-info" style={fullWidth} onClick={self._logOut}>LogOut</div>;
        }

        return (
            <div style={navBar} className="navbar">
        <div style={navButton} className="nav_button" onClick={this._toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <div>
          <a className="w-nav-brand brand" href="#"><h4 style={brandText}>tagmatic</h4></a>
          <div className={"menu-" + this.state.menu} style={navContainer}>
            <nav className="nav_menu"  style={closeMenu} role="navigation">
            <i className="fa fa-times fa-2x" onClick={this._toggleMenu}></i>
            {button}
            <ul className="list-group">
            {self.data.projects.map(function(c) {
                return (
                  <div className="list-group-item disabled" key={c.id} style={brandText}>{c.id}</div> 
                );
              })}
            </ul>
            </nav>
          </div>
        </div>
      </div>
        );
    },
    _toggleMenu: function() {
        this.setState({
            menu: !this.state.menu
        });
    }
});

module.exports = NavBar;
