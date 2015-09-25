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
          stage: {fileUploaded:false, headersUploaded:false, processing:false},
          data:null,
          header: {}
          });
      },
       handleChange: function(event) {
        this.setState({user: event});
      },
      render: function() {
        var body;

        if (this.state.stage['fileUploaded'] == false)
        {
          body = <FileForm data={this.linkState('data')} stage={this.linkState('stage')} header={this.linkState('header')} />;
        }

        //if (this.state.stage['fileUploaded'] == true && this.state.stage['headersUploaded'] == false)

        if ( this.state.stage['fileUploaded'] == true )
        {
          body = <HeaderSlider data={this.linkState('data')} stage={this.linkState('stage')} header={this.linkState('header')} />;
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