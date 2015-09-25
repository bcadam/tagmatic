var React = require('react');

var HeaderCreator = React.createClass({

    getInitialState: function() {
        return ({
            newTagValue: ''
        });
    },

    render: function() {
        return (
            <div className="todo_creator col-xs-8">
              <input
                value={this.state.newTagValue}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                />
              <a onClick={this._submit} className="todo_submit btn">Add</a>
            </div>
        );
    },

    _onChange: function(e) {
        this.setState({
            newTagValue: e.target.value
        });
    },

    _onKeyDown: function(e) {
        if (e.keyCode === 13) {
            this._submit();
        }
    },

    _submit: function() {
        this.props.submit(this.state.newTagValue);
        this.setState({
            newTagValue: ''
        });
    }
});

module.exports = HeaderCreator;
