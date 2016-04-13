var Parse = require('parse').Parse;
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var HeaderTagInsert = require('./HeaderTagInsert.react.js');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var HeaderTagBox = React.createClass({
    mixins: [LinkedStateMixin],

    render: function() {
        var self = this;

        var counter = 0;
        var positionInHeader = self.props.positionInHeader.value;


        return (
            <div className="col-xs-12">
            <div className="col-xs-12">{self.state.header.value[positionInHeader][0]}</div>
                
                <ul className="list-group">

                {self.state.header.value[positionInHeader][1].map(function(c) {

                counter = counter+1;
                return (
                  <div key={c} className="list-group-item" counter={counter} key={c.id} bolt={c}>{c} Key : {counter}</div>
                  );
              })}
                </ul>
            </div>

        );

    },
    componentDidMount: function() {
        $(document.body).on('keydown', this._advancePosition);

        var self = this;
        var positionInHeader = self.props.positionInHeader.value;
        console.log(positionInHeader);

 
    },
    componentWillUnmount: function() {
        $(document.body).off('keydown', this._advancePosition);
    },
    _advancePosition: function(e) {
        var self = this;
        var positionInHeader = self.props.positionInHeader.value;
        //console.log('positionInHeader');
        //console.log(positionInHeader);
        //console.log("the full tag array is");
        //console.log(self.state.header.value[positionInHeader]);

        switch (e.keyCode) {
            case 49:
                //console.log(self.state.header.value[positionInHeader][1][0]);
                //console.log("You pressed 1");
                break;
            case 50:
                // console.log(self.state.header.value[positionInHeader][1][1]);
                // console.log("You pressed 2");
                break;
            case 51:
                // console.log(self.state.header.value[positionInHeader][1][2]);
                // console.log("You pressed 3");
                break;
            case 52:
                // console.log(self.state.header.value[positionInHeader][1][3]);
                // console.log("You pressed 4");
                break;
            case 53:
                // console.log(self.state.header.value[positionInHeader][1][4]);
                // console.log("You pressed 5");
                break;
            default:
                //console.log(e.keyCode); 
                break;
        }
        //alert(e.value);
        //debug(e);
        //console.log(e.keyCode);
    },
    getInitialState: function() {
        return {
            positionInHeader: this.props.positionInHeader,
            data: this.props.data,
            header: this.props.header
        };
    }
});

module.exports = HeaderTagBox;