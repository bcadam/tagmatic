var Parse = require('parse').Parse;
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var HeaderBox = require('./HeaderBox.react.js');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/
var HeaderSlider = React.createClass({
    mixins: [LinkedStateMixin],
    render: function() {
        var self = this;
        var counter = -1;
        var appTagsContainer = {
            overflowX: 'scroll',
            overflowY: 'hidden',
            whiteSpace: 'nowrap'
        }
        var buttonUpload = {
            backgroundColor: 'transparent',
            border: '3px solid #ff763d',
            borderRadius: '20px',
            color: '#ff763d',
            fontFamily: 'Lato, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            opacity: '1',
            paddingTop: '15px',
            paddingBottom: '15px',
            textAlign: 'center',
            width: '140px',
        }
        var addCardDone = {
            cursor: 'pointer',
            marginTop: '80px',
            marginRight: '20px',
            marginLeft: '20px',
            opacity: '0.15'
        }
        if (self.state.stage.value['fileUploaded'] == false) {
            return (
                <div className="container"></div>
            );
        } else if (self.state.stage.value['headersUploaded'] == true) {
            var wording = "Done adding tags";
            var doneEditingButtonColor = "btn btn-success col-xs-12";
            return (
                <div className="container"></div>
            );
        } else {
            var wording = "Add more tags";
            var doneEditingButtonColor = "btn btn-info col-xs-12";
            return (
        <div>
          <div className="container">
            <div style={appTagsContainer}>
              {this.props.header.value.map(function(c) {
                counter = counter+1;
                //console.log(c);
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
              <i style={addCardDone} className="fa fa-plus-circle fa-4x" onClick={this._addHeader}></i>
              <i style={addCardDone} className="fa fa-check-circle fa-4x" onClick={this._doneAddingTags}></i>
            </div>
          </div>
        </div>
            );
        }
    },
    _addHeader: function() {
        var placeHolder = this.props.header.value;
        placeHolder.push(["New Header", [], true]);
        this.props.header.requestChange(placeHolder);

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
        console.log("this.props.data");
        console.log(this.props.data);
        return {
            stage: this.props.stage,
            header: this.props.header,
            editing: true,
            data: this.props.data
        };
    }
});
module.exports = HeaderSlider;
