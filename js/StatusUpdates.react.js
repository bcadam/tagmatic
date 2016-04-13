var Parse = require('parse').Parse;
var React = require('react');

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

    var image = ( !this.props.stage.value['fileUploaded'] ? 'import':'select');
    var header = ( !this.props.stage.value['fileUploaded'] ? 'Welcome! Start by pulling your data.' : 'Select the classifiers and tags you want.');
    var text =  ( !this.props.stage.value['fileUploaded'] ? 'Tell us what words or phrase you are interested in.' : 'Tell us what info you want pulled from the tweets and the choices are available');

    var statusContainer = {
      backgroundImage: 'url(../images/bg-' + image + '.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '450px',
      backgroundPosition: 'top center',
      paddingBottom: '70px'
    }
    var statusHeader = {
      color: '#FF763D',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '600',
      marginBottom: '20px',
      marginTop: '100px',
      paddingTop: '100px',
      textAlign: 'center',
    }
    var statusText = {
      fontSize: '16px'
    }
    return (
      <div style={statusContainer}>
        <h1 style={statusHeader}>{header}</h1>
        <div style={statusText}>{text}</div>
      </div>
    );

  },
});


module.exports = StatusUpdates;
