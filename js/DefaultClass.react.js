var Parse = require('parse').Parse;
var React = require('react/addons');

//http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
var DefaultClass = React.createClass({
          
          render: function() {
            return (
                <div></div>
            );
          },


          getInitialState: function() {
              return {
                dummy_data: null
                };
            },

          componentDidMount: function() {
            console.log("I just mounted!");
          },

          componentWillMount: function() {
            console.log("I'm about to mount you guys!");
          },

          componentWillUnmount: function() {
            console.log("I'm about to Unmount you guys!");
          },

          getDefaultProps: function() {
            return {
              default_prop: 'default value'
            };
          },

          componentWillReceiveProps: function(nextProps) {
            console.log("I'm about to receive some props");
          },

          shouldComponentUpdate: function(nextProps, nextState) {
            return nextProps.id !== this.props.id;
          }


        });


module.exports = DefaultClass;