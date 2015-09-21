/*
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

var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var ParseComponent = ParseReact.Component(React);

var BoltItem = require('./BoltItem.react.js');
var BoltCreator = require('./BoltCreator.react.js');

var currentUser = Parse.User.current();

// Top-Level component that binds to Parse using the ParseReact Mixin.
// This should help demonstrate the "It's Just That Easy" potential here.

//.equalTo("user",currentUser)

export default class BoltList extends ParseComponent {
  mixins: [ParseReact.Mixin]

  observe(props, state) {
    return {
      items: new Parse.Query('BoltItem').ascending('createdAt')
    };
  }

  render() {
    // If a query is outstanding, this.props.queryPending will be true
    // We can use this to display a loading indicator
    return (
      <div className={this.pendingQueries().length ? 'todo_list loading' : 'col-sm-8 todo_list'}>
        <a onClick={this._refresh.bind(this)} className="refresh">Refresh</a>
        {this.data.items.map(function(i) {
          // Loop over the objects returned by the items query, rendering them
          // with TodoItem components.
          return (
            <BoltItem key={i.id} item={i} update={this._updateItem} destroy={this._destroyItem} />
          );
        }, this)}
        <BoltCreator className="col-sm-12" submit={this._createItem} />
      </div>
    );
  }

  _refresh() {
    this.refreshQueries('items');
  }

  // A Create mutation takes a className and a set of new attributes
  _createItem(text) {
    ParseReact.Mutation.Create('BoltItem', {
      text: text, user : currentUser
    }).dispatch();
  }

  // A Set mutation takes an Id object and a set of attribute changes
  _updateItem(id, text) {
    ParseReact.Mutation.Set(id, {
      text: text
    }).dispatch();
  }

  // A Destroy mutation simply takes an Id object
  _destroyItem(id) {
    ParseReact.Mutation.Destroy(id).dispatch();
  }
}
