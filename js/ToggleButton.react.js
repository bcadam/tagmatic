var Parse = require('parse').Parse;
var React = require('react/addons');
var HeaderBox = require('./HeaderBox.react.js');


/** HeaderSlider is a class that displays the headers from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/
var ToggleButton = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

          render: function() {

                var publishState = this.props.publish;
                var classHolder;
                var colorHolder;

                if (publishState.value){ classHolder = "pull-right fa fa-check-square-o fa-2x"; colorHolder = "green"}
                else { classHolder = "pull-right fa fa-square-o fa-2x"; colorHolder = "red"}

                return (

                    <i style={{color:colorHolder}} className={classHolder} onClick={this._toggleActive} ></i>

                );
                  
          },
          _toggleActive: function(){

            self = this;

            console.log(this.props.publish);
            
            this.props.publish.requestChange(!self.state.publish.value);

          },
          getInitialState: function() {
              return {
                publish: this.props.publish
                };
            }
        });

module.exports = ToggleButton;