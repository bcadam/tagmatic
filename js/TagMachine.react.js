var Parse = require('parse').Parse;
var React = require('react/addons');
var ParseReact = require('parse-react');


var NavBar = require('./NavBar.react.js');
var HeaderTagBox = require('./HeaderTagBox.react.js');
var DataScroller = require('./DataScroller.react.js');
var HeaderScroller = require('./HeaderScroller.react.js');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var TagMachine = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;
        var counter = 0;
        var publishHeaders = self.state.publishHeaders;
        //console.log(this.state.data.value.data);
        //console.log(this.state.header.value);

        //console.log(self.state.header.value);
        //console.log(this.state.publishHeaders);

        var holderOfTweetColumn = self.props.stage.value.tweet;
        var tweet = self.props.data.value.data[self.state.positionInData][holderOfTweetColumn];

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

        var counter = {
            paddingTop: '80px'
        }

        var numOfTweets = this.state.data.value.data.length;
        var currentPosition = this.state.positionInData + 1;

        //this is keyed in an ugly way to get it to minimize reloading. but,there is a better way to set
        //the should update method
        return (
            <div>
              <NavBar />
              <div style={appMain}>
                <DataScroller key={self.state.positionInData} tweet={tweet} headers={publishHeaders} />
                <div style={counter}>{currentPosition} of {numOfTweets}</div>
              </div>
              <div style={appTags}>
                <HeaderScroller key={self.state.positionInHeader - 100} tweet={tweet} positionInData={self.state.positionInData} data={self.props.data} header={publishHeaders[self.state.positionInHeader]} />
                <div style={{textAlign:'center'}}>
                    <div className="btn btn-success" onClick={this._advanceHeader}>Advance</div>
                    <div className="btn btn-warning" onClick={this._createCsv}>Create CSV</div>
                </div>
              </div>
            </div>

        );

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
                positionInHeader: lengthOfHeader
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
        // var self = this;
        // var headerTextPointer = self.state.publishHeaders[self.state.positionInHeader][0];
        // var button = key; //button should be set to number - 1
        // button = button - 1;
        // var valueOfTag = self.state.publishHeaders[self.state.positionInHeader][1][button];
        // var positionInData = self.state.positionInData;
        // var positionInHeader = self.state.positionInHeader;
        // var headerBeingUsed = self.state.publishHeaders[self.state.positionInHeader];
        // var originalDataAtPoint = self.state.data.value.data[self.state.positionInData];
        // var originalData = self.state.data.value;
        // var originalDataAtHeader = self.state.data.value.data[self.state.positionInData];


        // // console.log(valueOfTag);
        // // console.log("^^^^^^^^VALUE OF TAG^^^^^^^^^^^^^^^^^^^^^^")
        // // console.log("Position in Data: " + positionInData);
        // // console.log("Position in Header: " + positionInHeader);
        // // console.log(headerBeingUsed);
        // // console.log("^^^^^^^^^^^HEADER BEING USED^^^^^^^^^^^^^^^^^^^^^^^^");
        // // console.log(originalData);
        // // console.log("^^^^^^^^^^^^^ORIGINAL DATA^^^^^^^^^^^^^^^^^^^^^");
        // // console.log(originalDataAtHeader);
        // // console.log("^^^^^^^^^^^^^ORIGINAL DATA AT HEADER^^^^^^^^^^^^^^^");

        // //console.log(originalData);
        // //console.log(originalDataAtHeader);

        // //console.log("Position in data: " + positionInData);
        // positionInData = parseInt(positionInData);

        // originalDataAtHeader[headerTextPointer] = valueOfTag;

        // var originalData = React.addons.update(originalData, {
        //     'data': {
        //         positionInData: {
        //             $set: originalDataAtHeader
        //         }
        //     }
        // });

        // this.state.data.requestChange(originalData);

        // //console.log(this.state.data.value);
    },
    getInitialState: function() {
        return {
            positionInData: 0,
            positionInHeader: 0,
            data: this.props.data,
            header: this.props.header,
            switcher: true,
            publishHeaders: []
        };
    }
});

module.exports = TagMachine;


//{self.state.data.value.data.map(function(c) {
//   counter = counter+1;
//   return (
//     <div>{c}</div>
//     );
// })}