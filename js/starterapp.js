import React from 'react';
import Parse from 'parse';
// import ParseReact from 'parse-react';
// Parse.initialize('pp9waK9ticOFbhrJzrdITkRVQfCycHLqNPj2ZrN6', '8UXFi3hzHgbKWoMZIIX3ZgUg0tHKPzSK6w8Ul0M6');

// Parse.initialize('pp9waK9ticOFbhrJzrdITkRVQfCycHLqNPj2ZrN6');
// Parse.serverURL = 'http://www.screenboss.co/parse';

import LinkedStateMixin from 'react-addons-linked-state-mixin';

// var Header = require('../components/Header.js');
// var LeftSideBar = require('../components/LeftSideBar.js');


var App = React.createClass({
    mixins: [LinkedStateMixin],

        getInitialState() {
        	var user = Parse.User.current()
        	//console.log(user);
            return {
                user: user,
                open: false,
            };
        },
        
        render() {

            return (
				<div>
			   Main Starter App
			                <section className="content">

			                    {this.props.children}

			                </section>
			          
		        </div>    
            )
        }
});

module.exports = App