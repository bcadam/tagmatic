var Parse = require('parse').Parse;
var React = require('react/addons');
var HeaderBox = require('./HeaderBox.react.js');


/** HeaderSlider is a class that displays the headers from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/
var HeaderSlider = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

          render: function() {
                var self = this;


                var counter = -1;
         

                return (

                  <div>
                      {this.state.header.value.map(function(c) {
                        counter = counter+1;
                        return (
                          <HeaderBox key={c} editing={self.state.editing} header={self.props.header} data={self.state.data} counter={counter} />
                          );
                      })}
                      <div className="btn btn-success col-xs-12" onClick={this._doneAddingTags}>Done Adding Tags</div>
                  </div>
                );
                  
          },
          _doneAddingTags: function()
          {

            var tempStage = this.state.stage.value;

            tempStage['headersUploaded'] = true;

            this.state.stage.requestChange(tempStage);
            this.setState({editing: !this.state.editing });
         
          },


          getInitialState: function() {
              return {
                stage: this.props.stage,
                header: this.props.header,
                editing: true
                };
            },

          componentDidMount: function() {
            //console.log("I just mounted!");
            //console.log(this.state.fileHeaders);
          },

          componentWillMount: function() {
            //console.log("I'm about to mount guys!");
          },

          componentWillUnmount: function() {
            //console.log("I'm about to Unmount guys!");
          },

          getDefaultProps: function() {
            return {
              //fileHeaders: ["Comment", "Article URL"]
            };
          },

          componentWillReceiveProps: function(nextProps) {
            //console.log("I'm about to receive some props");
          }
        });

module.exports = HeaderSlider;