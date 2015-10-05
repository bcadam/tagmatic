var Parse = require('parse').Parse;
var React = require('react/addons');

var HeaderTagInsert = require('./HeaderTagInsert.react.js');
var Item = require('./Item.react.js');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var HeaderTagBox = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;

        //console.log(this.state.data.value.data);
        // console.log(self.state.header.value);
        // console.log("done logging");
        var counter = 0;
        var positionInHeader = self.props.positionInHeader.value;

        //console.log(positionInData);
        //console.log(self.state.header.value);

        //console.log(self.state.header.value[positionInHeader][2]);
        //console.log("^^^^^^^^is for publishing");

        return (
            <div className="col-xs-12">
            <div className="col-xs-12">{self.state.header.value[positionInHeader][0]}</div>

                {self.state.header.value[positionInHeader][1].map(function(c) {

                counter = counter+1;
                return (
                  <div key={c} className="col-xs-12" counter={counter} key={c.id} bolt={c}>{c} Key : {counter}</div>
                  );
              })}
            </div>

        );

    },
    componentDidMount: function() {
        $(document.body).on('keydown', this._advancePosition);

        var self = this;
        var positionInHeader = self.props.positionInHeader.value;
        console.log(positionInHeader);

        //console.log(self.props.header.value);
        //console.log("^^^^ true/false should publish");
        // console.log("component dad mount");
        // console.log(self.props.header.value[positionInHeader][2]);
        // console.log("Position in header: " + self.props.positionInHeader);
        // console.log(self.props.header.value.length);
        // if (self.props.positionInHeader.value >= self.props.header.value.length)
        // {
        //     positionInHeader = positionInHeader + 1;
        //     self.props.positionInHeader.requestChange(positionInHeader);
        // }
    },
    componentWillMount: function() {
        
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

        switch(e.keyCode){
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


//{self.state.data.value.data.map(function(c) {
//   counter = counter+1;
//   return (
//     <div>{c}</div>
//     );
// })}
