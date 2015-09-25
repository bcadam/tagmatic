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
|     | Header Box                                 |    |
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


**/

var Parse = require('parse').Parse;
var React = require('react/addons');

var Login = require('./Login.react.js');
var FileForm = require('./FileForm.react.js');
var HeaderSlider = require('./HeaderSlider.react.js');


var TagMaticApp = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
        return ({
            user: Parse.User.current(),
            stage: {
                fileUploaded: false,
                headersUploaded: false,
                processing: false
            },
            data: null,
            header: {}
        });
    },
    handleChange: function(event) {
        this.setState({
            user: event
        });
    },
    render: function() {
        var body;

        if (this.state.stage['fileUploaded'] == false) {
            body = <FileForm 
                  data={this.linkState('data')} 
                  stage={this.linkState('stage')} 
                  header={this.linkState('header')} />;
        }

        //if (this.state.stage['fileUploaded'] == true && this.state.stage['headersUploaded'] == false)

        if (this.state.stage['fileUploaded'] == true) {
            body = <HeaderSlider 
                  data ={this.linkState('data')} 
                  stage={this.linkState('stage')} 
                  header={this.linkState('header')} />;
        }
        // if (this.state.stage['fileUploaded'] == true && this.state.stage['headersUploaded'] == true)
        // {
        //   body = <div>We did it</div>;
        // }

        return (
            <div className="col-sm-12">
          {body}
          </div>
        );



    }

});


module.exports = TagMaticApp;
