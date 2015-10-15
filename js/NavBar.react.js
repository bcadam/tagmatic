var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react/addons');


var NavBar = React.createClass({
    mixins: [React.addons.LinkedStateMixin, ParseReact.Mixin],

    observe: function() {
        // Subscribe to all Comment objects, ordered by creation date
        // The results will be available at this.data.projects
        return {
            projects: (new Parse.Query('Projects')).ascending('createdAt')
        };
    },

    componentWillMount: function() {
      var self = this;
        var query = new Parse.Query("Project");
        query.equalTo("user", this.props.user.value); // find all the women
        query.find({
            success: function(matchingProjects) {
                // Do stuff
                console.log(matchingProjects);
                self.setState({projects:matchingProjects});
            }
        });
        // console.log(this.props.user.value);
    },
    getInitialState: function() {
        return ({
            menu: false,
            projects: []
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
            },
            error: function(user, error) {
                // The login failed. Check error to see why.
            }
        });

    },
    _logOut: function() {
        var self = this;

        Parse.User.logOut().then(function() {
            self.props.user.requestChange(null);
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
            textAlign : 'center'
        }

        var button;
        if (!this.props.user.value) {
            button = (<div style={fullWidth}><input onChange={self._onChangeUsername} style={fullWidth} type="text" placeholder="Username"/><input onChange={self._onChangePassword} style={fullWidth} type="password" placeholder="Password"/><div className="btn btn-success" onClick={self._logIn} style={fullWidth}>LogIn</div></div>);
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
            {self.state.projects.map(function(c) {
                return (
                  <div key={c} style={brandText} >{c.id}</div>
                );
              })}
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
