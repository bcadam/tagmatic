var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var Project = require('./Project.react.js');


var NavBar = React.createClass({
    mixins: [LinkedStateMixin, ParseReact.Mixin],
    observe: function() {
        // Subscribe to all Comment objects, ordered by creation date
        // The results will be available at this.data.comments
        var query;
        var user = Parse.User.current();

        if (user) {
            var query = (new Parse.Query('Project')).descending("createdAt");
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
            user: Parse.User.current(),
            data: this.props.data,
            stage: this.props.stage,
            header: this.props.header,
            twitterQuery: this.props.twitterQuery,
            projectId : this.props.projectId
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

        var menuContainer = {
            backgroundColor: 'white',
            overflow: 'hidden',
            position: 'fixed',
            width: '0px',
            bottom: '0',
            top: '52',
            left: '0',
            textOverflow: 'clip',
            whiteSpace: 'nowrap',
            WebkitTransition: 'all 200ms ease',
            transition: 'all 200ms ease'
        }

        var navBar = {
            background: 'linear-gradient(to right, rgba(255, 118, 61, 0.6), #FF763D)',
            backgroundColor: '#FFC08F',
            border: 'none',
            borderBottom: '2px solid #FF763D',
            borderRadius: '0px',
            position: 'relative',
            zIndex: '1000'
        }

        var navButton = {
            color: 'white',
            cursor: 'pointer',
            float: 'left',
            fontSize: '20px',
            padding: '11px 15px 11px 15px',
            position: 'relative',
            width: '48px',
            WebkitTapHighlightColor: '#FF763D',
            tapHighlightColor: '#FF763D',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none',
            WebkitTransition: 'all 200ms ease',
            transition: 'all 200ms ease'
        }

        var brandText = {
          backgroundImage: 'url("../images/logo_1.png")',
          backgroundPosition: '0px 0px',
          backgroundSize: '25px',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          fontFamily: 'Raleway, sans-serif',
          fontSize: '14pt',
          fontWeight: '500',
          height: '32px',
          marginLeft: '10px',
          marginTop: '8px',
          paddingLeft: '28px',
          paddingTop: '8px',
        }

        var menuContent = {
            padding: '20px 30px'
        }

        var navMenu = {
            width: (this.state.menu ? '200px' : '0px')
        }

        var fullWidth = {
            width: "100%",
            textAlign: 'center'
        }

        var button;
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
        var menuIcon;
        if (self.state.menu == true) {
            menuIcon = <i className="fa fa-times"></i>;
        } else {
            menuIcon = <i className="fa fa-bars"></i>;
        }
        return (
            <div style={navBar} className="navbar">
                <div style={navButton} className="nav_button" onClick={this._toggleMenu}>
                  {menuIcon}
                </div>
                <div>
                  <a className="w-nav-brand brand" href="#">
                    <h1 style={brandText}>one<strong>Monarch</strong></h1>
                  </a>
                  <div className={"menu-" + this.state.menu} style={menuContainer}>
                    <nav className="nav_menu"  style={menuContent} role="navigation">
                        <ul className="list-group">
                            <li>Find chatter</li>
                            <li>Surface topics</li>
                            <hr/>
                            <li><b>Text Analysis</b></li>
                            <li>Select headers</li>
                            <li>Review and tag</li>
                            <hr/>
                            <li><b>Audience Analysis</b></li>
                            <li>Interest affinities</li>
                            <li>Brand perception</li>
                            <hr/>
                            <li><b>Reporting</b></li>
                        </ul>
                        {button}
                        <ul className="list-group">
                        {self.data.projects.map(function(c) {
                            return (
                              <Project 
                              object={c}     
                              data={self.state.data} 
                              stage={self.state.stage} 
                              header={self.state.header}
                              twitterQuery={self.state.twitterQuery}
                              className="list-group-item" 
                              key={c.id} 
                              style={brandText}
                              projectId={self.state.projectId} />
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
