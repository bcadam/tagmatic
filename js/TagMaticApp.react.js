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
var React = require('react/addons');

var Login = require('./Login.react.js');
var FileForm = require('./FileForm.react.js');
var HeaderSlider = require('./HeaderSlider.react.js');
var TagMachine = require('./TagMachine.react.js');


var TagMaticApp = React.createClass({
    mixins: [React.addons.LinkedStateMixin],


    /** State   Variables
        User:   Not currently used anywhere.
        Stage:
                fileUploaded: true or fals - used to progress user from the file input view to the adding tags options view.
                headersUploaded: true or fals - used to progress user from adding tags options view to tweet tagging view.
        Header: Array of (test,array,test)
                "Name of Header", array of all tags, true/false for published
    **/
    getInitialState: function() {
        return ({
            user: Parse.User.current(),
            stage: {
                fileUploaded: false,
                headersUploaded: false
                },
            data: null,
            header: {}
        });
    },
    render: function() {
        var body;

        var self = this;

        //////////////
        //  This serves up the first view which is a file upload form
        //////////////
        if (this.state.stage['fileUploaded'] == false) {
            body = <FileForm 
                  data={this.linkState('data')} 
                  stage={this.linkState('stage')} 
                  header={this.linkState('header')} />;
        }

        //////////////
        //  This serves up the second view which is the tag option view
        //////////////
        if (this.state.stage['fileUploaded'] == true && this.state.stage['headersUploaded'] == false) {
            body = <HeaderSlider 
                  stage={this.linkState('stage')} 
                  header={this.linkState('header')} />;
        }

        //////////////
        //  This serves up the third view which is the tag option view
        //////////////
        if (this.state.stage['fileUploaded'] == true && this.state.stage['headersUploaded'] != false) {
            body = <TagMachine 
                  onKeyDown={self._advancePosition}
                  data ={this.linkState('data')} 
                  stage={this.linkState('stage')} 
                  header={this.linkState('header')} />;
        }

        return (
            <div className="col-sm-12">
            {body}
          </div>
        );

    },
    _advancePosition: function(){
      alert("cat");
    }

});


module.exports = TagMaticApp;
