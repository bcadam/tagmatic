var Parse = require('parse').Parse;
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ParseReact = require('parse-react');

var NavBar = require('./NavBar.react.js');
var HeaderTagBox = require('./HeaderTagBox.react.js');
var DataScroller = require('./DataScroller.react.js');
var HeaderScroller = require('./HeaderScroller.react.js');
var HeaderScrollerNotActive = require('./HeaderScrollerNotActive.react.js');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var TagMachine = React.createClass({
    mixins: [LinkedStateMixin],

    render: function() {
        var self = this;
        var counter = 0;
        var publishHeaders = self.state.publishHeaders;

        //console.log(self.props.data.value);
        //default "text" @ 0 to Tweet and Twitter column
        //auto advance to next tag
        //on next tweet, go back to first header
        //move csv button to top right corner
        //send all tweets to datascroller n all headers to headerscroller
        //headerscroller shouldnt need tweet position 

        var holderOfTweetColumn = self.props.stage.value.tweet;
        var numOfTweets = this.state.data.value.data.length;
        var currentPosition = this.state.positionInData;
        var previousPosition = ((currentPosition == 0) ? (numOfTweets - 1) : (currentPosition - 1));
        var nextPosition = ((currentPosition + 1 == numOfTweets) ? 0 : (currentPosition + 1));

        //console.log(currentPosition, previousPosition, nextPosition);
        //console.log(self.props.data.value.data[currentPosition]);
        var currentTweet = self.props.data.value.data[currentPosition][holderOfTweetColumn];
        var previousTweet = self.props.data.value.data[previousPosition][holderOfTweetColumn];
        var nextTweet = self.props.data.value.data[nextPosition][holderOfTweetColumn];

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
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
        }

        var buttonUpload = {
            backgroundColor: 'white',
            border: '3px solid #ff763d',
            borderRadius: '20px',
            color: '#ff763d',
            cursor: 'pointer',
            fontFamily: 'Lato, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            opacity: '1',
            marginTop: '30px',
            textAlign: 'center',
            width: '140px',
        }

        var counter = {
            paddingTop: '80px'
        }

        var leftArrow = {
            marginTop: '75px',
            opacity: '0.1'
        }
        var rightArrow = {
            marginTop: '75px',
            opacity: '0.1'
        }

        var saveStatus;
        if (Parse.User.current()) {
            saveStatus = <div className="btn btn-info" onClick={this._saveStatus} >Save Status</div>
        } else {
            saveStatus = <div></div>
        }

        //this is keyed in an ugly way to get it to minimize reloading. but,there is a better way to set
        //the should update method
        var previousPositonInHeader = (self.state.positionInHeader == 0 ? self.state.publishHeaders.length - 1 : self.state.positionInHeader - 1);
        var nextPositionInHeader = (self.state.positionInHeader == self.state.publishHeaders.length - 1 ? 0 : self.state.positionInHeader + 1);
        return (
            <div>
              <NavBar user={self.linkState('user')} 
              data={self.linkState('data')} 
              stage={self.linkState('stage')} 
              header={self.linkState('header')}
              twitterQuery={self.linkState('twitterQuery')}
              projectId={self.linkState('projectId')} />
              <div style={appMain}>
                <DataScroller key={self.state.positionInData} tweet={currentTweet} next={nextTweet} previous={previousTweet} headers={publishHeaders} />
                <div style={counter}>{currentPosition + 1} of {numOfTweets}</div>
                <div>(Press up or down to cycle through tweets)</div>
              </div>
              <div style={appTags}>
                <i style={leftArrow} className="fa fa-angle-left fa-3x"></i>
                <HeaderScrollerNotActive header={publishHeaders[previousPositonInHeader]} />
                <HeaderScroller key={self.state.positionInHeader - 100} tweet={currentTweet} positionInData={currentPosition} data={self.props.data} header={publishHeaders[self.state.positionInHeader]} />
                <HeaderScrollerNotActive header={publishHeaders[nextPositionInHeader]} />
                <div style={{textAlign:'center'}}>
                    <div className="btn btn-warning" onClick={this._createCsv} >Create CSV</div>
                    {saveStatus}
                </div>
                <i style={rightArrow} className="fa fa-angle-right fa-3x"></i>
              </div>
            </div>

        );

    },
    _handleButton: function() {
        this.refs.button.loading();
        //make asynchronious call
        setTimeout(function() {
            this.refs.button.success();
        }.bind(this), 3000);
    },
    _saveStatus: function() {

        var self = this;

        //console.log(self.state.projectId);
        //console.log("self.state.projectId.value");
        self.state.projectId.requestChange("10");

        if (self.state.projectId.value == null) {

            var acl = new Parse.ACL();
            acl.setPublicReadAccess(false);
            acl.setPublicWriteAccess(false);
            acl.setRoleWriteAccess("admins", true);
            acl.setRoleReadAccess("admins", true);
            acl.setWriteAccess(Parse.User.current(), true);
            acl.setReadAccess(Parse.User.current(), true);


            var creator = ParseReact.Mutation.Create('Project', {
                positionInData: self.state.positionInData,
                positionInHeader: self.state.positionInHeader,
                data: self.props.data.value,
                header: self.props.header.value,
                publishHeaders: self.state.publishHeaders,
                user: Parse.User.current(),
                twitterQuery: self.props.twitterQuery.value,
                stage: self.props.stage.value,
                ACL: acl
            });

            creator.dispatch()
                .then(function(results) {
                    //alert(results.id);
                    self.state.projectId.requestChange(results.id);
                });
        }


    },
    componentDidMount: function() {

        //console.log("mount");

        var self = this;
        $(document.body).on('keydown', self._receiveButton);
    },
    componentWillMount: function() {
        // This takes all the headers and returns the published ones.
        var self = this;
        var tempArray = [];

        for (var i = 0; i <= self.state.header.value.length - 1; i++) {
            if (self.state.header.value[i][2]) {
                tempArray.push(self.state.header.value[i]);
            }
        };

        self.setState({
            publishHeaders: tempArray
        });

    },
    componentWillUnmount: function() {
        $(document.body).off('keydown', this._receiveButton);
    },
    _createCsv: function() {
        var self = this;

        var confiVariables = {
            quotes: false,
            delimiter: ",",
            newline: "\r\n"
        };

        var tempHolderOfData = self.state.data.value.data;
        //console.log(tempHolderOfData);

        var csv = Papa.unparse(tempHolderOfData);

        // console.log(csv);

        // saveAs(csv, "hello world.txt");

        var blob = new Blob([csv], {
            type: "text/csv;charset=utf-8"
        });

        var time = new Date();
        var timeString = "TagMatic " + time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear();
        //console.log("Time String: " + timeString);
        saveAs(blob, timeString);

    },
    _advanceHeader: function() {
        //console.log("doing advance");
        var self = this;
        if (self.state.positionInHeader >= self.state.publishHeaders.length - 1) {
            self.setState({
                positionInHeader: 0
            });
        } else {
            self.setState({
                positionInHeader: self.state.positionInHeader + 1
            });
        }


    },
    _retreatHeader: function() {
        var self = this;
        var positionInHeader = self.state.positionInHeader;
        var lengthOfHeader = self.state.publishHeaders.length;
        if (positionInHeader == 0) {
            self.setState({
                positionInHeader: lengthOfHeader - 1
            });
        } else {
            self.setState({
                positionInHeader: positionInHeader - 1
            });
        }

    },
    _advanceData: function() {
        var self = this;
        //console.log(self.state.data.value.data.length);
        var targetLength = self.state.data.value.data.length - 1;
        if (self.state.positionInData < self.state.data.value.data.length) {
            self.setState({
                positionInData: self.state.positionInData + 1
            });
        } else {
            self.setState({
                positionInData: targetLength
            });
        }
    },
    _retreatData: function() {
        var self = this;
        var positionInData = this.state.positionInData;
        if (self.state.positionInData > 1) {
            self.setState({
                positionInData: self.state.positionInData - 1
            });
        } else {
            self.setState({
                positionInData: 0
            });
        }
    },
    _receiveButton: function(e) {
        //console.log(e.keyCode);
        var self = this;
        var positionInHeader = self.state.positionInHeader;
        var lengthOfHeader = self.state.publishHeaders.length;

        switch (e.keyCode) {
            case 37:
                ////// Left arrow key
                self._retreatHeader();
                break;
            case 38:
                /// up arrow
                self._retreatData();
                break;
            case 39:
                /// Right arrow
                //console.log("right arrow");
                //console.log(self.state.header.value[positionInHeader][1][0]);
                self._advanceHeader();
                break;
            case 40:
                // Down arrow
                self._advanceData();
                //console.log(self.state.positionInData);
                break;
            case 49:
                // #1 button
                //self._enterTags(1);
                break;
            case 50:
                // #2 button
                //self._enterTags(2);
                break;
            case 51:
                // #3 button
                //self._enterTags(3);
                break;
            case 52:
                // #4 button
                //self._enterTags(4);
                break;
            case 53:
                //  #5 button
                //self._enterTags(5);
                break;
            default:
                console.log(e.keyCode);
                break;
        }
    },
    _enterTags: function(key) {

    },
    getInitialState: function() {
        return {
            positionInData: 0,
            positionInHeader: 0,
            data: this.props.data,
            header: this.props.header,
            switcher: true,
            publishHeaders: [],
            projectId: this.props.projectId
        };
    }
});

module.exports = TagMachine;
