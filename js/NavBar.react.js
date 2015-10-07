var Parse = require('parse').Parse;
var React = require('react/addons');

var NavBar = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      menu: false
    });
  },
  render: function() {
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
      width: (this.state.menu? '200px' : '0px')
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
            <div>menu</div>
            </nav>
          </div>
        </div>
      </div>
    );
  },
  _toggleMenu: function() {
    this.setState({menu:!this.state.menu});
  }
});

module.exports = NavBar;