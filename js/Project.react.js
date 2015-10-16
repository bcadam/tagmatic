var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var React = require('react/addons');


var Project = React.createClass({
    getInitialState:function() {
        return {
              projectId : this.props.projectId
        };
    },
    render: function() {
        var self = this;

        var navBar = {
            backgroundColor: 'white',
            borderColor: 'black black #efefef',
            borderStyle: 'none none solid',
            borderWidth: '1px',
            position: 'relative',
            zIndex: '1000'
        }

        var date = new Date(self.props.object['updatedAt']);

        return (
            <div onClick={self._restoreData} style={navBar} className="list-group-item">{date.toLocaleDateString()} {date.getHours()}:{date.getMinutes()}</div>
        );
    },
    _restoreData: function() {

        var self = this;
        self.props.twitterQuery.requestChange('new');

        self.props.data.requestChange(self.props.object['data']);
        //console.log(self.props.object['stage']);

        self.props.stage.requestChange(self.props.object['stage']);
        self.props.header.requestChange(self.props.object['header']);
        self.props.twitterQuery.requestChange(self.props.object['twitterQuery']);

        console.log(self.state.projectId.value);
        //self.state.projectId.requestChange("dog");


        //console.log(self.props.object);

    },
    componentWillUnmount: function() {
        //alert("adios");
    },

});

module.exports = Project;
