import React from 'react';
// import Parse from 'parse';
// import ParseReact from 'parse-react';
// Parse.initialize('pp9waK9ticOFbhrJzrdITkRVQfCycHLqNPj2ZrN6', '8UXFi3hzHgbKWoMZIIX3ZgUg0tHKPzSK6w8Ul0M6');

var BlankApp = React.createClass({
	
        render() {
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
});

module.exports = BlankApp