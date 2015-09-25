var Parse = require('parse').Parse;
var React = require('react/addons');
var HeaderBox = require('./HeaderBox.react.js');


/** HeaderSlider is a class that displays the headers from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/
var ToggleButton = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

          render: function() {

                var activeHolder = this.state.active;

                if (activeHolder){ activeHolder = "pull-right fa fa-square-o fa-2x"; }
                else { activeHolder = "pull-right fa fa-check-square-o fa-2x"; }


                return (


                    <i className={activeHolder} onClick={this._toggleActive} ></i>


                );
                  
          },
          _toggleActive: function(){

            this.setState({ active : !this.state.active });

          },
          getInitialState: function() {
              return {
                active: this.props.active
                };
            }
        });

module.exports = ToggleButton;