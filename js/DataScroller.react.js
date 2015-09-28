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
            {self.props.data.value.data[self.props.positionInData.value][holderOfTweetColumn]}
            </div>

        );

    }
});

module.exports = DataScroller;


//{self.state.data.value.data.map(function(c) {
//   counter = counter+1;
//   return (
//     <div>{c}</div>
//     );
// })}
