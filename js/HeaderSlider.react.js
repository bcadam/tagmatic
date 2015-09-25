var Parse = require('parse').Parse;
var React = require('react/addons');
var HeaderBox = require('./HeaderBox.react.js');


/** HeaderSlider is a class that displays the headers from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/
var HeaderSlider = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

          render: function() {
                var self = this;
                
                //console.log("firing render in headerslider");
                //console.log(this.props.header);

                // this is a debug to test the headers in the data object
                //console.log(self.state.data.value['meta']['fields']);

                var counter = -1;
                // <HeaderBox header={c} data={self.state.data} count={counter} />

                //console.log(self.props.header);

                //console.log("sliderLoaded");
                //console.log(self.props.header);
                return (


                  <div>


                  {this.state.header.value.map(function(c) {
                    counter = counter+1;
                    return (
                      <HeaderBox editing={self.state.editing} header={self.props.header} data={self.state.data} counter={counter} />
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

            //console.log(tempStage);


            this.state.stage.requestChange(tempStage);
            this.setState({editing: !this.state.editing });
            //console.log(this.state.editing);


            //this.editing

            //console.log(this.state.stage);
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