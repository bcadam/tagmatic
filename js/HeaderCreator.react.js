/*
<<<<<<< HEAD
 *  Copyright (c) 2015, Parse, LLC. All rights reserved.
 *
 *  You are hereby granted a non-exclusive, worldwide, royalty-free license to
 *  use, copy, modify, and distribute this software in source code or binary
 *  form for use in connection with the web services and APIs provided by Parse.
 *
 *  As with any software that integrates with the Parse platform, your use of
 *  this software is subject to the Parse Terms of Service
 *  [https://www.parse.com/about/terms]. This copyright notice shall be
 *  included in all copies or substantial portions of the software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 *
 */

var React = require('react');

=======
*  Copyright (c) 2015, Parse, LLC. All rights reserved.
*
*  You are hereby granted a non-exclusive, worldwide, royalty-free license to
*  use, copy, modify, and distribute this software in source code or binary
*  form for use in connection with the web services and APIs provided by Parse.
*
*  As with any software that integrates with the Parse platform, your use of
*  this software is subject to the Parse Terms of Service
*  [https://www.parse.com/about/terms]. This copyright notice shall be
*  included in all copies or substantial portions of the software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
*  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
*  IN THE SOFTWARE.
*
*/

var React = require('react');
>>>>>>> jerry initial
var HeaderCreator = React.createClass({
  getInitialState: function() {
    return ({
      value: ''
    });
  },
<<<<<<< HEAD

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

=======
  render: function() {
    var inputTag = {
      border: '1px solid #efefef',
      fontFamily: 'Lato, sans-serif',
      fontSize: '16px',
      fontWeight: '500',
      marginLeft: '3px',
      marginRight: '3px',
      marginTop: '3px',
      marginBottom: '3px',
      paddingLeft: '5px',
      paddingRight: '5px',
      width: '218px'
    }
    if (!this.props.published) {
      return <div></div>
    }
    return (
      <div>
        <input 
          ref="tagInput"
          value={this.state.value}
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          placeholder="Add tags..."
          style={inputTag}
        />
      </div>
    );
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log(this.state.justUpdated);
    return true;
  },
  componentDidUpdate: function () {
    React.findDOMNode(this.refs.tagInput).focus();
  },
>>>>>>> jerry initial
  _onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },
<<<<<<< HEAD

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

=======
  _onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this._submit();
    } else if (e.keyCode === 27) {
      this.setState({value: ''})
    }
  },
  _submit: function() {
    if (this.state.value !== '') {
      this.props.submit(this.state.value);
    }
  }
});
>>>>>>> jerry initial
module.exports = HeaderCreator;