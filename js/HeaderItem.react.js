var React = require('react');

var HeaderItem = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return ({
      editing: false,
      editText: ''
    });
  },

  render: function() {
    var cardTag = {
      width: '210px',
      height: '30px',
      padding: '5px 0px 5px 10px'
    }
    var cardTagText = {
      cursor: 'text',
      display: 'inline-block',
      fontFamily: 'Lato, sans-serif',
      overflow: 'hidden',
      paddingRight: '5px',
      paddingLeft: '5px',
      textAlign: 'left',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '190px'
    }
    var iconRemove = {
      cursor: 'pointer',
      WebkitTransition: 'all 200ms ease',
      transition: 'all 200ms ease',
      opacity: (this.state.hover ? '0.25' : '0') 
    }
    var inputTag = {
      border: '1px solid #efefef',
      fontFamily: 'Lato, sans-serif',
      fontSize: '16px',
      fontWeight: '500',
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '5px',
      width: '195px'
    }
    if (this.state.editing) {
      return (
        <div>
          <input
            ref="edit_input"
            onChange={this._onChange}
            onKeyDown={this._onKeyDown}
            value={this.state.editText}
            style={inputTag}
          />
        </div>
      );
    }
    return (
      <div style={cardTag} onMouseOver={this._toggleHover} onMouseOut={this._toggleHover}>
        <div style={cardTagText} onClick={this._startEdit}>{this.props.item}</div>
        <i style={iconRemove} className="fa fa-minus-circle" onClick={this._removeItem}></i>
      </div>
    );
  },
  _toggleHover: function() {
    this.setState({hover:!this.state.hover});
  },
  _startEdit: function() {
    this.setState({
      editText: this.props.item,
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
      this.props.update(this.props.index, this.state.editText);
    } else if (this.state.editText == "") {
      this._removeItem()
    }
  },
  _removeItem: function() {
    this.props.delete(this.props.index);
  }
});

module.exports = HeaderItem;
