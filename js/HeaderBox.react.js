var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react/addons');

var HeaderItem = require('./HeaderItem.react.js');
var HeaderCreator = require('./TodoCreator.react.js');

// var ToggleButton = require('./ToggleButton.react.js');


//http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
var HeaderBox = React.createClass({
    mixins: [React.addons.LinkedStateMixin],


    getInitialState: function() {
        return {
            value: true,
            publish: this.props.header.value[this.props.counter][2]
        };
    },

    render: function() {

        self = this;
        var holderHeader = self.props.header.value[self.props.counter][0];
        var holderTags = self.props.header.value[self.props.counter][1];
        var publishHolder = this.state.publish;

        var appropriateAction;
        if (this.props.editing) {
            appropriateAction = <HeaderCreator submit={this._createItem} className="xs-col-12" />;
        }
        if (publishHolder) {
            var checkColor = "green";
            var checkClass = "pull-right fa fa-check-square-o fa-2x";
        } else {
            var checkColor = "red";
            var checkClass = "pull-right fa fa-square-o fa-2x";
        }

        var hidePublishToggle = ((self.state.publish) ? "" : "hidden");

        return (
            <div className='todo_list xs-col-12'>
      <div className="row">
        <div className="col-xs-6">{holderHeader}</div>
        <div className="col-xs-6"><i onClick={this._togglePublish} style={{color:checkColor}} className={checkClass}></i></div>
      </div>
      

     
      <div className={hidePublishToggle} >
        {holderTags.map(function(i) {
          // Loop over the objects returned by the items query, rendering them
          // with TodoItem components.
          return (
            <HeaderItem 
              key={i} 
              item={i} 
              className="xs-col-12" 
              />
          );
        }, this)}
        {appropriateAction}
      </div>


      </div>
        );


    },
    _togglePublish: function() {
        // console.log("the publish var is currently: ");
        // console.log(this.state.publish);

        var newPublishState = !this.state.publish;
        this.setState({
            "publish": newPublishState
        });


        var holderHeader = this.props.header.value[this.props.counter][0];
        var existingTags = this.props.header.value[this.props.counter][1];

        var fullHeaderWithTags = [holderHeader, existingTags, newPublishState];
        var tempFullHeader = this.props.header.value;
        tempFullHeader[this.props.counter] = fullHeaderWithTags;

        this.props.header.requestChange(tempFullHeader);


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
        // console.log(this.props.header.value[this.props.counter][2]);

        var holderHeader = this.props.header.value[this.props.counter][0];
        var existingTags = this.props.header.value[this.props.counter][1];
        //console.log(existingTags);

        var publish = this.state.publish;

        existingTags.push(text);
        var fullHeaderWithTags = [holderHeader, existingTags, publish];
        var tempFullHeader = this.props.header.value;
        tempFullHeader[this.props.counter] = fullHeaderWithTags;

        this.props.header.requestChange(tempFullHeader);
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
