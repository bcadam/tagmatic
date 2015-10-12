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

    getSearch: function() {
        var myArr = this.state.data;
        var self = this;

        var xmlhttp = new XMLHttpRequest();
        var url = "https://tagmatic.herokuapp.com/api/twitter/search/" + self.state.searchValue + "/" + self.state.searchCount;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myArr = JSON.parse(xmlhttp.responseText);
                self.setState({
                    data: myArr
                });
                //myFunction(myArr);
                //alert("cat");
                //console.log(myArr);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

    },

    render: function() {

        var self = this;
        //console.log(self.state.data);
        var counter = 0;
        if (self.state.data == null) {
            return (<div><input type="text" value={self.state.searchValue} onChange={self._onChange} /><input type="number" value={self.state.searchCount} onChange={self._onChangeCount} /><div onClick={self.getSearch} className="btn btn-success">Get Tweets</div></div>);
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
