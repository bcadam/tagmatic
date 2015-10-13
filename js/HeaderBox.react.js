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
        stage: this.props.stage
    };
  },
  render: function() {

    self = this;
    var holderHeader = self.props.header.value[self.props.counter][0];
    var holderTags = self.props.header.value[self.props.counter][1];
    var holderPublish = self.state.publish;
    var tweetStage = self.state.stage.value.tweet;
    var holderTweet = (holderHeader === tweetStage);
    var resizePublishToggle = ((holderPublish) ? "" : "hideContent");

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
      borderColor: holderTweet ? '#009DFF' : '#eaeaea',
      backgroundColor: 'white',
      margin: '0px',
      opacity: '1',
      overflow: 'hidden'
    }
    var cardHeader = {
      backgroundColor: holderTweet ? 'rgb(186, 229, 255)': (holderPublish ? '#D8FFD5' : '#f2f2f2'),
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
      color: holderTweet ? '#e8e8e8' : 'black',
      height: '101px',
      overflowX: 'hidden',
      overflowY: 'auto'
    }

    return (
      <div style={cardContainer}>
        <div style={card} className={resizePublishToggle}>
          <div style={cardHeader}>
            <HeaderTitle header={holderHeader} submit={self._updateHeader}/>
            <HeaderIcons keyColor="#555" tweetColor={(holderTweet ? "#009DFF" : "#555")} publishColor={(holderPublish ? "green" : "#555")}
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
            <HeaderCreator submit={self._createItem} published={holderPublish} disabled={holderTweet} />
        </div>
      </div>
    );
  },
  _markKey: function() {

  },
  _markTweet: function(){
    var self = this;
    var holderStage = self.state.stage.value;
    var holderHeader = self.props.header.value[self.props.counter][0];

    if(holderStage.tweet === holderHeader) {
      holderStage.tweet = "";
      holderStage.tweetCounter = "";
    } else {
      holderStage.tweet = holderHeader;
      holderStage.tweetCounter = self.props.counter;
      this._unPublish();
    }
    self.state.stage.requestChange(holderStage); 
  },
  _unMarkTweet: function(){
    var self = this;
    var holderStage = self.state.stage.value;
    var holderHeader = self.props.header.value[self.props.counter][0];

    holderStage.tweet = "";
    holderStage.tweetCounter = "";
    self.state.stage.requestChange(holderStage); 
  },
  _unPublish: function() {
    var newPublishState = false;
    this.setState({publish: newPublishState});

    var fullHeader = this.props.header.value;
    fullHeader[this.props.counter][2] = newPublishState;
    this.props.header.requestChange(fullHeader);
  },
  _togglePublish: function() {
    var newPublishState = !this.state.publish;
    this.setState({publish: newPublishState});
    if(newPublishState === true) { this._unMarkTweet(); }
    var fullHeader = this.props.header.value;
    fullHeader[this.props.counter][2] = newPublishState;
    this.props.header.requestChange(fullHeader);
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