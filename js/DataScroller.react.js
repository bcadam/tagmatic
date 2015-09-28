var Parse = require('parse').Parse;
var React = require('react/addons');


/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var DataScroller = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;
        var holderOfTweetColumn = self.props.stage.value.tweet;
        //console.log(holderOfTweetColumn);
        return (
            <div className="col-xs-12">
            {self.state.data.value.data[self.state.positionInData.value][holderOfTweetColumn]}
            </div>

        );

    },
    getInitialState: function() {
        return {
            positionInData: this.props.positionInData,
            data: this.props.data,
        };
    }
});

module.exports = DataScroller;


//{self.state.data.value.data.map(function(c) {
//   counter = counter+1;
//   return (
//     <div>{c}</div>
//     );
// })}
