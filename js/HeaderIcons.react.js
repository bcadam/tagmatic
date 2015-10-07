var React = require('react');

var HeaderIcons = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
       hoverKey: false,
      hoverText: false,
       hoverPub: false
    });
  },
  render: function() {
    self = this;
    var cardIcons = {
      display: 'inline-block',
      height: '30px',
      paddingTop: '5px',
      textAlign: 'center',
      width: '52px'
    }
    var keyIcon = {
      color: this.props.keyColor,
      cursor: 'pointer',
      paddingLeft: '2px',
      paddingRight: '2px'
    }
    var tweetIcon = {
      color: this.props.tweetColor,
      cursor: 'pointer',
      paddingLeft: '2px',
      paddingRight: '2px'
    }
    var publishIcon = {
      color: this.props.publishColor,
      cursor: 'pointer',
      paddingLeft: '2px',
      paddingRight: '2px'
    }
//        <i style={keyIcon} className="fa fa-key" onClick={this.props.key}></i>
    return (
      <div style={cardIcons}>

        <i style={tweetIcon} className="fa fa-comments-o" onClick={this.props.tweet}></i>
        <i style={publishIcon} className="fa fa-check-square-o" onClick={this.props.publish}></i>
      </div>
    );
  }
});
module.exports = HeaderIcons;