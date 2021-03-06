var Parse = require('parse').Parse;
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ParseReact = require('parse-react');
var natural = require('natural');


//https://github.com/NaturalNode/natural

var HeaderScroller = React.createClass({
    mixins: [LinkedStateMixin],

    getInitialState: function() {
        return {
            headerClassifier: null
        };
    },
    render: function() {
        var self = this;
        var counter = 0;
        var tweet = self.props.header[0];

        var cardContainer = {
            display: 'inline-block',
            width: '230px',
            height: '150px',
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
            fontWeight: 'bold',
            height: '30px',
            width: '100%',
            overflow: 'hidden',
            paddingLeft: '5px',
            paddingRight: '5px',
            textAlign: 'center'
        }
        var cardIcon = {
            opacity: '0.25'
        }
        var scrollWindow = {
            borderBottom: '1px solid #efefef',
            height: '120px',
            overflowX: 'hidden',
            overflowY: 'auto'
        }
        var hotKey = {
            backgroundColor: 'green',
            borderRadius: '50px',
            color: 'white',
            float: 'right',
            fontSize: '8px',
            fontWeight: 'bold',
            marginTop: '4px',
            marginRight: '5px',
            padding: '1px 4px 1px 5px'
        }

        return (
            <div style={cardContainer} className="">
                <div style={card}>
                  <div style={cardHeader}>{tweet}</div>
                  <div style={scrollWindow}>
                    {
                        self.props.header[1].map(function(c) {
                        counter = counter + 1;
                        return (
                          <div key={c} className="" counter={counter}>{c} <span style={hotKey}>{counter}</span></div>
                          );
                        })
                    }
                  </div>
                </div>
              </div>
        );

    },
    componentDidMount: function() {
        var self = this;
        $(document.body).on('keydown', self._receiveButton);

        var headerName = self.props.header[0];
        var headerTags = self.props.header[1];
        //console.log(headerTags);
        //console.log(headerName);
        var headerPublished = self.props.header[2];
        var classifierMachine = new natural.BayesClassifier();

        var Classifier = Parse.Object.extend("Classifier");
        var query = new Parse.Query(Classifier);

        query.equalTo("nameOfHeader", headerName).containsAll("tagsInHeader", headerTags);
        query.equalTo("published", true);

        query.find({
            success: function(results) {
                // alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                if (results == 0) {
                    var Classifier = Parse.Object.extend("Classifier");
                    // Create a new instance of that class.
                    var classifierObject = new Classifier();
                    classifierObject.set("nameOfHeader", headerName);
                    classifierObject.set("tagsInHeader", headerTags);
                    classifierObject.set("published", true);

                    var raw = JSON.stringify(classifierMachine);

                    classifierObject.set("classifier", raw);
                    classifierObject.save();


                    //** INSERT CLASSIFIER HERE**//


                    self.setState({
                        headerClassifier: classifierObject
                    });
                    //console.log(self.state.headerClassifier.get('classifier'));
                    //console.log(classifier.get('classifier'));
                    //console.log(classifierMachine);
                    //console.log("^^^^^^^^classifierMachine");
                    //console.log(self.props.headerClassifier);

                } else {
                    self.setState({
                        headerClassifier: results[0]
                    });

                    //console.log(results[0]);
                    //console.log("^^^^^^^^results[0]");
                    //console.log(self.props.headerClassifier);
                }

            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        }).then(function() {

            var raw = self.state.headerClassifier.get('classifier');
            var restoredClassifier = natural.BayesClassifier.restore(JSON.parse(raw));
            var tweet = self.props.tweet;

        });

    },
    _receiveButton: function(e) {
        //console.log(e.keyCode);
        var self = this;
        //var positionInHeader = self.state.positionInHeader;
        //var lengthOfHeader = self.state.publishHeaders.length;

        switch (e.keyCode) {
            // case 37:
            //     ////// Left arrow key
            //     //self._retreatHeader();
            //     break;
            // case 38:
            //     /// up arrow
            //     //self._retreatData();
            //     break;
            // case 39:
            //     /// Right arrow
            //     //console.log("right arrow");
            //     //console.log(self.state.header.value[positionInHeader][1][0]);
            //     //self._advanceHeader();
            //     break;
            // case 40:
            //     // Down arrow
            //     //self._advanceData();
            //     //console.log(self.state.positionInData);
            //     break;
            case 49:
                // #1 button
                self._enterTags(1);
                //alert('this fires');
                break;
            case 50:
                // #2 button
                self._enterTags(2);
                break;
            case 51:
                // #3 button
                self._enterTags(3);
                break;
            case 52:
                // #4 button
                self._enterTags(4);
                break;
            case 53:
                //  #5 button
                self._enterTags(5);
                break;
            default:
                //console.log(e.keyCode);
                break;
        }
    },
    _enterTags: function(key) {
        //console.log("button pressed");

        var self = this;
        var headerTextPointer = self.props.header[0];
        var button = key; //button should be set to number - 1
        button = button - 1;
        var valueOfTag = self.props.header[1][button];
        var headerBeingUsed = self.props.header;
        var originalDataAtPoint = self.props.data.value.data[self.props.positionInData];
        var originalData = self.props.data.value;
        var originalDataAtHeader = self.props.data.value.data[self.props.positionInData];
        var tweet = self.props.tweet;
        // console.log(headerTextPointer);
        // console.log(originalDataAtPoint);
        // console.log(this.props.headerClassifier.get('classifier'));
        //console.log(tweet);
        // console.log(valueOfTag);
        // console.log("^^^^^^^^VALUE OF TAG^^^^^^^^^^^^^^^^^^^^^^")
        // // console.log("Position in Data: " + positionInData);
        // // console.log("Position in Header: " + positionInHeader);
        // console.log(headerBeingUsed);
        // console.log("^^^^^^^^^^^HEADER BEING USED^^^^^^^^^^^^^^^^^^^^^^^^");
        // console.log(originalData);
        // console.log("^^^^^^^^^^^^^ORIGINAL DATA^^^^^^^^^^^^^^^^^^^^^");
        // console.log(originalDataAtHeader);
        // console.log("^^^^^^^^^^^^^ORIGINAL DATA AT HEADER^^^^^^^^^^^^^^^");

        //console.log(originalData);
        //console.log(originalDataAtHeader);


        // var valueOfJsonClassifier = self.props.headerClassifier.get('classifier');
        // console.log(valueOfJsonClassifier);

        // var classifierMachine = bayes.fromJson(valueOfJsonClassifier);

        var raw = this.state.headerClassifier.get('classifier');

        //console.log(raw);

        var restoredClassifier = natural.BayesClassifier.restore(JSON.parse(raw));
        //console.log(restoredClassifier);
        restoredClassifier.addDocument(tweet, valueOfTag);
        restoredClassifier.train();

        //console.log(restoredClassifier.getClassifications(tweet));
        //console.log("^^^ classifications");

        var raw = JSON.stringify(restoredClassifier);

        //console.log(this.props.headerClassifier);
        //console.log(this.props.headerClassifier.get("classifier"));

        this.state.headerClassifier.set("classifier", raw);
        //console.log(raw);
        this.state.headerClassifier.save();

        //console.log(restoredClassifier.classify('i should sell that'));
        //console.log(classifierMachine);
        //console.log("Position in data: " + positionInData);

        var positionInData = parseInt(self.props.positionInData);

        originalDataAtHeader[headerTextPointer] = valueOfTag;

        //console.log(originalDataAtHeader);

        originalData[positionInData] = originalDataAtHeader;

        //console.log(originalDataAtHeader);
        // var originalData = React.addons.update(originalData, {
        //     'data': {
        //         positionInData: {
        //             $set: originalDataAtHeader
        //         }
        //     }
        // });

        this.props.data.requestChange(originalData);

        //console.log(this.state.data.value);
    }
});


module.exports = HeaderScroller;
