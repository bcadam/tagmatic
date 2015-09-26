var Parse = require('parse').Parse;
var React = require('react/addons');


/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var TagMachine = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;

        console.log(this.state.data.value.data);

        return (

            <div onKeyDown={self._advancePosition} >{self.state.data.value.data[self.state.positionInData]}</div>
        );

    },
    _advancePosition: function(e) {
        if (e.keyCode === 13) {
            alert("done");
        }
        alert(e.keyCode);
    },
    getInitialState: function() {
        return {
            positionInData: 0,
            data: this.props.data
        };
    }
});

module.exports = TagMachine;


//{self.state.data.value.data.map(function(c) {
                      //   counter = counter+1;
                      //   return (
                      //     <div>{c}</div>
                      //     );
                      // })}
