var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var Twitter = require('twitter-node-client').Twitter;

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

                    //just for debugging
                    //var data = results;
                    //console.log(results['meta']['fields']); //this should show the headers in the csv
                    // end of debugging
                    // self.setState({parsedData: results });


                    //write the parsed data object back to the app
                    self.props.data.requestChange(results);

                    var formattingHeader = results['meta']['fields'];
                    //console.log("firing from fileform");
                    //console.log(formattingHeader);



                    for (var i = 0; i < formattingHeader.length; i++) {
                        //text += cars[i] + "<br>";

                        var positionHolder = formattingHeader[i];
                        //console.log(positionHolder);

                        var entryHolder = [positionHolder, [], true];
                        builtHeader.push(entryHolder);
                    }


                    // console.log("builtHeader");
                    //console.log(builtHeader[0][0]);

                    //builtHeader[0][1].push("cat");
                    // console.log(builtHeader);
                    //debug(builtHeader);

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

                    // console.log("the stage is to follow");
                    // console.log(stage);
                    self.props.stage.requestChange(stage);


                },
                error: undefined,
                download: false,
                skipEmptyLines: false,
                chunk: undefined,
                fastMode: undefined,
                beforeFirstChunk: undefined,
                withCredentials: undefined
            };


            console.log(self.props.header.value);

            for (var i = 0; i < builtHeader; i++) {
                var headerValue = builtHeader[i];

                for (var y = 0; y < data.length; y++) {
                    data[data.length].push(headerValue);
                }

            }


            //data.push(builtHeader);
            //console.log(data);

            data = Papa.unparse(data);
            console.log(data);
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
            marginTop: '60px',
            paddingTop: '15px',
            paddingBottom: '15px',
            textAlign: 'center',
            width: '140px',
        }

        var self = this;
        //console.log(self.state.data);
        var counter = 0;
        if (self.state.data == null) {
            return (<div>
                    <input placeholder="Value to search for" type="text" value={self.state.searchValue} onChange={self._onChange} /><input placeholder="Amount" type="number" value={self.state.searchCount} onChange={self._onChangeCount} />
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
