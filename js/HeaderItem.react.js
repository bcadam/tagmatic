var React = require('react');

// //<div className="options">
//             <a onClick={this._startEdit}><i className="icon_edit" /></a>
//             <a onClick={this._removeItem}><i className="icon_delete" /></a>
//           </div>

var HeaderItem = React.createClass({
mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return ({
      editing: false,
      editText: ''
    });
  },

  render: function() {
    if (this.state.editing) {
      return (
        <div className="todo_item editing">
          <input
            ref="edit_input"
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.editText}
          />
          <a className="save" onClick={this._stopEdit}>
            <i className="icon_submit" />
          </a>
        </div>
      );
    }
    return (
      <div className="todo_item">
        <div className="item_text">
          {this.props.item}
          
        </div>
      </div>
    );
  },

  _startEdit: function() {
    this.setState({
      editText: this.props.item.text,
      editing: true
    }, function() {
      // Set the cursor to the end of the input
      var node = this.refs.edit_input.getDOMNode();
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
      this._stopEdit();
    }
  },

  _stopEdit: function() {
    if (this.state.editText) {
      this.props.update(this.props.item.id, this.state.editText);
      this.setState({
        editing: false
      });
    } else {
      this.props.destroy(this.props.item.id);
    }
  },

  _removeItem: function() {
    this.props.destroy(this.props.item.id);
  }
});

module.exports = HeaderItem;