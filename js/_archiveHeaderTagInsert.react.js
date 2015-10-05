var Parse = require('parse').Parse;
var React = require('react/addons');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var HeaderTagInsert = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;

        console.log(this.state.data.value.data);

        return (
            <div 
                onKeyDown={self._advancePosition}
                onClick={self._advancePosition}>{self.state.data.value.data[self.state.positionInData]}</div>
        );

    },
    componentDidMount: function() {
        $(document.body).on('keydown', this._advancePosition);
    },
    componentWillUnmount: function() {
        $(document.body).off('keydown', this.handleKeyDown);
    },
    _advancePosition: function(e) {
        if (e.keyCode === 13) {
            console.log(e.keyCode);
        }
        //alert(e.value);
        //console.log(e);
    },
    getInitialState: function() {
        return {
            positionInData: 0,
            data: this.props.data
        };
    }
});

module.exports = HeaderTagInsert;


//{self.state.data.value.data.map(function(c) {
//   counter = counter+1;
//   return (
//     <div>{c}</div>
//     );
// })}
