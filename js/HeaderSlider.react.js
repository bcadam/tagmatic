var Parse = require('parse').Parse;
var React = require('react/addons');
var HeaderBox = require('./HeaderBox.react.js');


/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var HeaderSlider = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;
        var counter = -1;

        if (self.state.stage.value['headersUploaded'] == false) {
            var wording = "Done adding tags";
            var doneEditingButtonColor = "btn btn-success col-xs-12";
        } else {
            var wording = "Add more tags";
            var doneEditingButtonColor = "btn btn-info col-xs-12";
        }

        return (

            <div>
                      {this.state.header.value.map(function(c) {
                        counter = counter+1;
                        return (
                          <HeaderBox 
                            key={c} 
                            editing={self.state.editing} 
                            header={self.props.header} 
                            data={self.state.data} 
                            counter={counter}
                            stage={self.state.stage} 
                            />
                          );
                      })}
                      <div className={doneEditingButtonColor} onClick={this._doneAddingTags}>{wording}</div>
                  </div>
        );

    },

    // Hides the add tag creator field on the HeaderBoxes
    _doneAddingTags: function() {

        var tempStage = this.state.stage.value;
        tempStage['headersUploaded'] = true;

        this.state.stage.requestChange(tempStage);
        this.setState({
            editing: !this.state.editing
        });
    },


    getInitialState: function() {
        return {
            stage: this.props.stage,
            header: this.props.header,
            editing: true,
            data: this.props.data
        };
    }
});

module.exports = HeaderSlider;
