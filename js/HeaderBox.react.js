var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react/addons');

var HeaderTitle = require('./HeaderTitle.react.js');
var HeaderIcons = require('./HeaderIcons.react.js');
var HeaderItem = require('./HeaderItem.react.js');
var HeaderCreator = require('./HeaderCreator.react.js');

/** The HeaderBox represents a column from a csv. It is used to add potential tags
    to a column. It can be shown or hidden by the user. */

//http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
var HeaderBox = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  //////////////
  //  In addition to the passed props this class used a published state to hide the added
  //    tags and toggle the switch.
  //////////////
  getInitialState: function() {
    return {
      publish: this.props.header.value[this.props.counter][2],
        stage: this.props.stage,
        tweet: false
    };
  },
  render: function() {
    var cardContainer = {
      display: 'inline-block',
      width: '230px',
      height: '190px',
      padding: '15px 2px 10px 2px',
      opacity: '1', //toggle this between 0.4 and 1 depending on whether its active or not when tagging
      verticalAlign: 'top'
    }
    var card = {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '#efefef #eaeaea #eaeaea',
      backgroundColor: 'white',
      margin: '0px',
      opacity: '1',
      overflow: 'hidden'
    }
    var cardHeader = {
      backgroundColor: '#f2f2f2',
      borderBottom: '1px solid #efefef',
      height: '30px',
      width: '100%',
      overflow: 'hidden',
      paddingLeft: '5px',
      paddingRight: '5px'
    }
    var cardIcon = {
      opacity: '0.25'
    }
    var scrollWindow = {
      borderBottom: '1px solid #efefef',
      height: '101px',
      overflowX: 'hidden',
      overflowY: 'auto'
    }

    self = this;
    var holderHeader = self.props.header.value[self.props.counter][0];
    var holderTags = self.props.header.value[self.props.counter][1];
    var publishHolder = self.state.publish;
    var tweetHolder = self.state.tweet;

    var resizePublishToggle = ((publishHolder) ? "" : "hideContent");

    return (
      <div style={cardContainer}>
        <div style={card} className={resizePublishToggle}>
          <div style={cardHeader}>
            <HeaderTitle header={holderHeader} submit={self._updateHeader}/>
            <HeaderIcons keyColor="#555" tweetColor={(tweetHolder ? "#009DFF" : "#555")} publishColor={(publishHolder ? "green" : "#555")}
                         key={this._markKey} tweet={this._markTweet} publish={this._togglePublish}
            />
          </div>
          <div style={scrollWindow}>
            {holderTags.map(function(object, index) {
              // Loop over the objects returned by the items query, rendering them
              // with TodoItem components.
              return (
                <HeaderItem 
                  key={object}
                  index={index}
                  item={object}
                  update={this._updateItem}
                  delete={this._destroyItem}
                />
              );
            }, this)}
          </div>
            <HeaderCreator submit={self._createItem} published={publishHolder} />
        </div>
      </div>
    );
  },
  _markKey: function() {

  },
  _markTweet: function(){
    var newTweetState = !this.state.tweet;
    this.setState({tweet: newTweetState});
    var self = this;
    var holderStage = self.state.stage.value;
    holderStage.tweet = (newTweetState ? self.props.header.value[self.props.counter][0] : "");
    holderStage.tweetCounter = (newTweetState ? self.props.counter : null);
    self.state.stage.requestChange(holderStage);

    if(this.state.publish) { this._togglePublish();}   
  },
  _togglePublish: function() {
    var newPublishState = !this.state.publish;
    this.setState({publish: newPublishState});

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
  _updateHeader: function(text) {
    var fullHeader = this.props.header.value;
    var header = fullHeader[this.props.counter][0];
    if(header !== text) {
      fullHeader[this.props.counter][0] = text;
      this.props.header.requestChange(fullHeader);
    }
  },
  // A Create mutation takes a className and a set of new attributes
  _createItem: function(text) {
    // ParseReact.Mutation.Create('TodoItem', {
    //   text: text
    // }).dispatch();
    // console.log(this.props.header.value[this.props.counter][2]);

    var fullHeader = this.props.header.value;
    var tags = fullHeader[this.props.counter][1];
    if(tags.indexOf(text) == -1) {
      fullHeader[this.props.counter][1].push(text);
      this.props.header.requestChange(fullHeader);
    }
  },
  // A Set mutation takes an Id object and a set of attribute changes
  _updateItem: function(index, text) {
    var fullHeader = this.props.header.value;
    var tags = fullHeader[this.props.counter][1];
    var item = fullHeader[this.props.counter][1][index];
    if(item !== text && tags.indexOf(text) == -1) {
      fullHeader[this.props.counter][1][index] = text;
      this.props.header.requestChange(fullHeader);
    } else if (tags.indexOf(text) > -1) {
      this._destroyItem(index);
    }
    //need to make case insensitive and strip spaces and stuff

  },
  // A Destroy mutation simply takes an Id object
  _destroyItem: function(index) {
    var fullHeader = this.props.header.value;
    fullHeader[this.props.counter][1].splice(index, 1);
    this.props.header.requestChange(fullHeader);
  }
});

module.exports = HeaderBox;