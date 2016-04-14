import React from 'react';
// import Parse from 'parse';
// import ParseReact from 'parse-react';
// Parse.initialize('pp9waK9ticOFbhrJzrdITkRVQfCycHLqNPj2ZrN6', '8UXFi3hzHgbKWoMZIIX3ZgUg0tHKPzSK6w8Ul0M6');
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import Menu from 'material-ui/lib/svg-icons/action/settings';



var Home = React.createClass({
	
        render() {
            return (
                <div>
                <AppBar
                    title={<span>OneMonarch</span>}
                    style={{backgroundColor:"#FF7A42"}}
                    showMenuIconButton={false}
                  />
                    {this.props.children}
                </div>
            )
        }
});

module.exports = Home