var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var Twitter = require('twitter-node-client').Twitter;


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



var TwitterPull = React.createClass({

    getInitialState: function() {
        return {
            data: null,
            searchValue: '',
            searchCount: null
        };
    },

    _onChange: function(e) {
        this.setState({
            searchValue: e.target.value
        });
        //alert(this.state.searchValue);
    },

    _onChangeCount: function(e) {
        this.setState({
            searchCount: e.target.value
        });
        //alert(this.state.searchCount);
    },

    _getSearch: function() {
        var myArr = this.state.data;
        var self = this;

        var xmlhttp = new XMLHttpRequest();
        var host = "https://tagmatic.herokuapp.com";
        var url = host + "/api/twitter/search/" + self.state.searchValue + "/" + self.state.searchCount;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myArr = JSON.parse(xmlhttp.responseText);



                self._moveStageAndDataAlong(myArr);

                //myFunction(myArr);
                //alert("cat");
                //console.log(myArr);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    },
    _moveStageAndDataAlong: function(data) {

        var self = this;


        var data = data['twitterResponse'];

        // self.setState({
        //     data: myArr
        // });

        //console.log(data);
        var tempSuggestedClassifier = [];


        var SuggestedClassifier = Parse.Object.extend("SuggestedClassifier");
        var query = new Parse.Query(SuggestedClassifier);
        query.equalTo("published", true);
        query.find({
            success: function(results) {
                for (var i = 0; i < results.length; i++) {


                    var object = results[i];
                    //alert(object.id);
                    tempSuggestedClassifier.push([object.get("nameOfHeader"), object.get("tagsInHeader"), true]);
                }



            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        }).then(function() {

            var builtHeader = [];


            var confiVariables = {
                delimiter: "", // auto-detect
                newline: "", // auto-detect
                header: true,
                dynamicTyping: false,
                preview: 0,
                encoding: "",
                worker: false,
                comments: false,
                step: undefined,
                complete: function(results) {

                    var formattingHeader = results['meta']['fields'];
                    //console.log("firing from fileform");
                    //console.log(formattingHeader);


                    var positionHolder = formattingHeader[0];
                    var entryHolder = [positionHolder, [], false];
                    builtHeader.push(entryHolder);



                    // This is where the columns that come in from the twitter feed are added to the headers
                    // for (var i = 1; i < formattingHeader.length; i++) {
                    //     var positionHolder = formattingHeader[i];
                    //     var entryHolder = [positionHolder, [], false];
                    //     builtHeader.push(entryHolder);
                    // }


                    for (var i = 0; i < tempSuggestedClassifier.length; i++) {
                        //text += cars[i] + "<br>";

                        var positionHolder = tempSuggestedClassifier[i];
                        //console.log(positionHolder);
                        //console.log("positionHolder");
                        var entryHolder = [positionHolder[0], positionHolder[1], true];
                        builtHeader.push(entryHolder);

                    }


                    self.props.header.requestChange(builtHeader);

                    //create a temporary stage object which will be used to change the field we want
                    var stage = self.props.stage.value;
                    stage['fileUploaded'] = true;

                    //self.props.stage.requestChange(stage);


                    // console.log("builtHeader");
                    // console.log(builtHeader);

                    //var holderStage = self.props.stage.value;
                    stage.tweet = builtHeader[0][0];

                    stage.tweetCounter = 0;

                    //console.log(self.props.stage);

                    self.props.stage.requestChange(stage);
                    //console.log(stage);



                    for (var i = 0; i < results.data.length; i++) {

                        var size = Object.size(results.data[i]);

                        //console.log(size);

                        for (var y = 0; y < tempSuggestedClassifier.length; y++) {
                            //console.log("tempSuggestedClassifier");

                            if (tempSuggestedClassifier[y][2]) {
                                //console.log(tempSuggestedClassifier[y][0]);
                                results.data[i][tempSuggestedClassifier[y][0]] = '';
                            }

                        }

                    }

                    console.log("results");
                    console.log(results);

                    console.log("tempSuggestedClassifier");
                    console.log(tempSuggestedClassifier);

                    self.props.data.requestChange(results);


                },
                error: undefined,
                download: false,
                skipEmptyLines: false,
                chunk: undefined,
                fastMode: undefined,
                beforeFirstChunk: undefined,
                withCredentials: undefined
            };

            //console.log(data);



            //console.log(self.props.header.value);

            // for (var i = 0; i < builtHeader; i++) {
            //     var headerValue = builtHeader[i];

            //     for (var y = 0; y < data.length; y++) {
            //         data[data.length].push(headerValue);
            //     }

            // }



            //data.push(builtHeader);
            //console.log(data);



            data = Papa.unparse(data);
            //console.log(data);
            ////////////////// beginning of parsing function
            Papa.parse(data, confiVariables);


        });


    },


    render: function() {

        var fileFormContainer = {
            textAlign: 'center',
            width: '100%'
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
            paddingTop: '15px',
            paddingBottom: '15px',
            textAlign: 'center',
            width: '140px',
        }

        var formFormat = {
            color: '#ff763d',
            fontFamily: 'Lato, sans-serif',
            fontSize: '20px',
            fontWeight: '700',
            opacity: '1',
            textAlign: 'center',
            marginTop: '20px',
            marginLeft: '20px',
            marginRight: '20px'
        }

        var self = this;
        //console.log(self.state.data);
        var counter = 0;
        if (self.state.data == null) {
            return (<div id="twitterform" style={fileFormContainer}>
                    <input style={formFormat} placeholder="Value to search for" type="text" value={self.state.searchValue} onChange={self._onChange} /><input style={formFormat} placeholder="#Tweets to Pull" type="number" value={self.state.searchCount} onChange={self._onChangeCount} />
                    <div style={fileFormContainer}>
                    <label className="w-button" style={buttonUpload} onClick={self._getSearch}>SEARCH</label>
                    </div>
                    </div>);
        } else {
            console.log(self.state.data["twitterResponse"]);

            return (<div>{self.state.data['twitterResponse'].map(function(c) {
                counter = counter+1;
                return (
                  <div key={c.tweetId} className="col-xs-12"><img src={c.userProfileImageUrl} /><div className="col-xs-9">{c.text}</div></div>
                );
              })}</div>);
        }

    }



});


module.exports = TwitterPull;
