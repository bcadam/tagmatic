var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var HeaderTitle = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return ({
      editing: false,
      editText: ''
    });
  },
  render: function() {
    var headerText = this.props.header;
    var cardHeader = {
      display: 'inline-block',
      paddingTop: '5px'
    }
    var cardHeaderText = {
      cursor: 'text',
      display: 'inline-block',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '700',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',     
      width: '165px'
    }
    var inputHeader = {
      border: '1px solid #efefef',
      fontFamily: 'Lato, sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      height: '24px',
      marginTop: '3px',
      paddingLeft: '5px',
      paddingRight: '5px',
      width: '100%'
    }
    if (this.state.editing) {
      return (
        <div>
          <input
            ref="edit_header"
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.editText}
            style={inputHeader}
          />
        </div>
      );
    }
    return (
      <div style={cardHeader}>
        <div style={cardHeaderText} onClick={this._startEdit}>{headerText}</div>
      </div>
    );
  },
  _startEdit: function() {
    this.setState({
      editText: this.props.header,
      editing: true
    }, function() {
      // Set the cursor to the end of the input
      var node = this.refs.edit_header.getDOMNode();
      node.focus();
      var len = this.state.editText.length;
      node.setSelectionRange(len, len);
    });
  },
  _onChange: function(e) {
    this.setState({
      editText: e.target.value
    });
  },
  _onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this._updateItem();
      this._stopEdit();
    } else if (e.keyCode === 27) {
      this._stopEdit();
    }
  },
  _stopEdit: function() {
    this.setState({
      editing: false
    });
  },
  _updateItem: function() {
    if (this.state.editText) {
      this.props.submit(this.state.editText);
    }
  }
});
module.exports = HeaderTitle;