var Parse = require('parse').Parse;
var React = require('react/addons');

var StatusUpdates = React.createClass({

  // data_uri: a placeholder for uploading the file
  // parsedData: the meat and potatoes. This is fired on the initial selection of the file from the browser
  getInitialState: function() {
    return {
        data_uri: null,
        parsedData: null,
    };
  },
  render: function() {
    // styling of file field to be customized based on Jerry's design
    var statusContainer = {
    }
    var bgImport = {
      marginTop: '0px',
      width: '450px',
    }
    var bgSelect = {
      marginTop: '0px',
      width: '410px',
      opacity: '0.8'
    }
    var statusText = {
      color: '#e0e0e0',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '600',
      marginBottom: '50px',
      marginTop: '150px',
      textAlign: 'center',
    }

    if (!this.props.stage.value['fileUploaded']) {
      return (
        <div style={statusContainer}>
          <h1 style={statusText}>Welcome!&nbsp;Start by uploading your data...</h1>
          <img style={bgImport} src="./images/bg-import.png"/>
        </div>
      );
    } else {
      return (
        <div style={statusContainer}>
          <h1 style={statusText}>Select the headers and tags you want</h1>
          <img style={bgSelect} src="./images/bg-select.png"/>
        </div>
      );
    }
  },
});


module.exports = StatusUpdates;
