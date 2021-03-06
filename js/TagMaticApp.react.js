/**

Tagmatic App Structure:

Step 1
---------------------------------------
File upload form. Once a file is selected, it populates an array with the parsed data.
  It also creates a seperate array of the headers to which is added the tags.


Step 2
---------------------------------------
Once the file has been uploaded and processed, the column headers are displayed. On this view,
  you can add possbile tags to each header as well as unpublished the header entirely.

Classes in step 2
|-------------------------------------------------------|
|   Header Slider                                       |
|                                                       |
|     |--------------------------------------------|    |
|     | Header Box                Published Button |    |
|     |                                            |    |
|     |  |-------------------------------------|   |    |
|     |  |  Header Item                        |   |    |
|     |  |-------------------------------------|   |    |
|     |  |-------------------------------------|   |    |
|     |  |  Header Item Repeats                |   |    |
|     |  |-------------------------------------|   |    |
|     |  |-------------------------------------|   |    |
|     |  |  Header Creator                     |   |    |
|     |  |-------------------------------------|   |    |
|     |--------------------------------------------|    |
|                                                       |
|     |--------------------------------------------|    |
|     | Header Box                                 |    |       
|-------------------------------------------------------|

Step 3 <------ COMING SOON ---------->
---------------------------------------
TagMachine takes two states, the data that was parsed and the header object. Using the header object
  it goes through each line of the data and presents the appropriate tags with for that point. The tags 
  are bound to a key based on their order. When the key is pressed each tag is added to the appropriate
  header in the data.

**/

var Parse = require('parse').Parse;
var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ParseReact = require('parse-react');

var NavBar = require('./NavBar.react.js');
var FileForm = require('./FileForm.react.js');
var HeaderSlider = require('./HeaderSlider.react.js');
var TagMachine = require('./TagMachine.react.js');
var StatusUpdates = require('./StatusUpdates.react.js');
var TwitterPull = require('./TwitterPull.react.js');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var TagMaticApp = React.createClass({
    mixins: [LinkedStateMixin],
    /** State   Variables
        User:   Not currently used anywhere.
        Stage:
                fileUploaded: true or false - used to progress user from the file input view to the adding tags options view.
                headersUploaded: true or false - used to progress user from adding tags options view to tweet tagging view.
        Header: Array of (test,array,test)
                "Name of Header", array of all tags, true/false for published
    **/
    getInitialState: function() {
        return ({
            user: Parse.User.current(),
            stage: {
                fileUploaded: false,
                headersUploaded: false,
                tweet: null,
                tweetCounter: null
            },
            data: null,
            header: {},
            twitterQuery: null,
            projectId: null
        });
    },
    render: function() {
        var self = this;
        var appMain = {
            position: 'fixed',
            left: '0px',
            top: '0px',
            right: '0px',
            bottom: '200px',
            textAlign: 'center'
        }
        var appTags = {
            position: 'absolute',
            left: '0px',
            right: '0px',
            bottom: '0px',
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '200px',
            borderTop: '3px solid #ff763d',
            backgroundColor: 'whitesmoke'
        }
            //////////////
            //  This serves up the second view which is the tag option view
            //////////////
        if (self.state.stage['fileUploaded'] && self.state.stage['headersUploaded']) {
          return (
            <TagMachine 
              onKeyDown={self._advancePosition}
              data ={self.linkState('data')} 
              stage={self.linkState('stage')} 
              header={self.linkState('header')}
              twitterQuery={self.linkState('twitterQuery')}
              projectId={self.linkState('projectId')} 
            />
          );
        } else {
          var postionHolder;
          if (!self.state.stage['fileUploaded']) {
            postionHolder = <TwitterPull 
              data={self.linkState('data')} 
              stage={self.linkState('stage')} 
              header={self.linkState('header')}
              twitterQuery={self.linkState('twitterQuery')}
            />;
          } else {
            postionHolder = <HeaderSlider 
              stage={self.linkState('stage')}
              data ={self.linkState('data')}
              header={self.linkState('header')}
            />;
          }

          return (
            <div>
              <NavBar
                user={self.linkState('user')} 
                data={self.linkState('data')} 
                stage={self.linkState('stage')} 
                header={self.linkState('header')}
                twitterQuery={self.linkState('twitterQuery')}
                projectId={self.linkState('projectId')}
              />
              <div style={appMain}>
                <StatusUpdates 
                  data={self.linkState('data')} 
                  stage={self.linkState('stage')} 
                  header={self.linkState('header')}
                />
                {postionHolder}
                {this.props.children}
              </div>
            </div>
          );
        }
    }
});
module.exports = TagMaticApp;
