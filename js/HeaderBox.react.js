var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react/addons');
var ParseComponent = ParseReact.Component(React);

var TodoItem = require('./TodoItem.react.js');
var TodoCreator = require('./TodoCreator.react.js');

var HeaderItem = require('./HeaderItem.react.js');
var HeaderCreator = require('./TodoCreator.react.js');

// Top-Level component that binds to Parse using the ParseReact Mixin.
// This should help demonstrate the "It's Just That Easy" potential here.


//http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
var HeaderBox = React.createClass({
  // mixins: [React.addons.LinkedStateMixin],


  // // data for testing
  // mixins: [ParseReact.Mixin],
  // observe: function(props, state) {
  //   return {
  //     items: new Parse.Query('TodoItem').ascending('createdAt')
  //   };
  // },

  getInitialState: function() {
    return {
      header: this.props.header,
      value : true
      };
  },

  render: function() {
    // If a query is outstanding, this.props.queryPending will be true
    // We can use this to display a loading indicator

    self = this;
    
    //console.log(this.props.header.value[this.props.counter]);

    var holderHeader = self.props.header.value[self.props.counter][0];
    //console.log("holder header " + holderHeader);
    var holderTags = self.props.header.value[self.props.counter][1];
    //console.log("holder tags " + holderTags);

    //console.log(holderHeader);



    //console.log("data in headerbox");
    //console.log(self.state.data.value['meta']['fields']);
    
    //console.log(self.props.header.value[self.props.counter][1]);

    // return (
    //   <div className={this.pendingQueries().length ? 'todo_list loading' : 'todo_list'}>
    //   {self.state.header}
    //     <a onClick={self._refresh.bind(this)} className="refresh">Refresh</a>
    //     {self.props.header.value.map(function(i) {
    //       // Loop over the objects returned by the items query, rendering them
    //       // with TodoItem components.
    //       return (
    //         <HeaderItem key={i.id} item={i} update={this._updateItem} destroy={this._destroyItem} />
    //       );
    //     }, this)}
    //     <HeaderCreator submit={this._createItem} />
    //   </div>
    // // );
    
    var appropriateAction;
    if (this.props.editing)
    {
    appropriateAction = <HeaderCreator submit={this._createItem} />;
    }
    // else
    // {
    //   appropriateAction = <div>button</div>;
    // }
 
    return (
      <div className='todo_list xs-col-12'>
      <div className="row">
      <div className="pull-left">{holderHeader}</div>
      <div className="pull-right">{holderHeader} Right</div>
      </div>
        {holderTags.map(function(i) {
          // Loop over the objects returned by the items query, rendering them
          // with TodoItem components.
          return (
            <HeaderItem item={i} className="xs-col-12" />
          );
        }, this)}
        {appropriateAction}
      </div>
    );




  },

  _refresh: function() {
    //not currently being used but kept for future.
    //this.refreshQueries('items');
  },

  // A Create mutation takes a className and a set of new attributes
  _createItem: function(text) {
    // ParseReact.Mutation.Create('TodoItem', {
    //   text: text
    // }).dispatch();
    
    var holderHeader = this.state.header.value[this.props.counter][0];
    //console.log("The holder header is: " + holderHeader);

    var existingTags = this.state.header.value[this.props.counter][1];
    //console.log(existingTags);

    existingTags.push(text);
    //console.log(existingTags);

    var fullHeaderWithTags = [holderHeader,existingTags];
    //console.log(fullHeaderWithTags);
    //console.log(above);

    var tempFullHeader = this.state.header.value;
    tempFullHeader[this.props.counter] = fullHeaderWithTags;

    this.props.header.requestChange(tempFullHeader);  
    // this.setState({value: !this.state.value});
  },

  // A Set mutation takes an Id object and a set of attribute changes
  _updateItem: function(id, text) {
    //ParseReact.Mutation.Set(id, {
    //   text: text
    // }).dispatch();




  },

  // A Destroy mutation simply takes an Id object
  _destroyItem: function(id) {
    //ParseReact.Mutation.Destroy(id).dispatch();




  }
});

module.exports = HeaderBox;

