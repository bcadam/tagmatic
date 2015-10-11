var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');
var Twitter = require('twitter-node-client').Twitter;

var TwitterPull = React.createClass({

    getInitialState: function() {
        return {
            data: null
        };
    },
    componentWillMount: function() {
        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:5000/api/twitter/search/intel&count=1";

        var myArr = this.state.data;
        var self = this;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                myArr = JSON.parse(xmlhttp.responseText);
                self.setState({
                    data: myArr
                });
                //myFunction(myArr);
                //alert("cat");
                console.log(myArr);
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        
    },

    render: function() {

        var self = this;
        console.log(self.state.data);

        if (self.state.data == null) {
            return (<div></div>);
        } else 
        {
            return (
                <div>
            {self.state.data.map(function(c) {
                var counter = counter+1;
                console.log(c);
                return (
                  <div>{counter}</div>
                );
              })}
            </div>);
        }



    }



});


module.exports = TwitterPull;
