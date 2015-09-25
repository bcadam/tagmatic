var React = require('react');

var HeaderCreator = React.createClass({

    getInitialState: function() {
        return ({
            value: ''
        });
    },

    render: function() {
        return (
            <div className="todo_creator">
              <input
                value={this.state.value}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                />
              <a onClick={this._submit} className="todo_submit">Add</a>
            </div>
        );
    },

    _onChange: function(e) {
        this.setState({
            value: e.target.value
        });
    },

    _onKeyDown: function(e) {
        if (e.keyCode === 13) {
            this._submit();
        }
    },

    _submit: function() {
        this.props.submit(this.state.value);
        this.setState({
            value: ''
        });
    }
});

module.exports = HeaderCreator;
