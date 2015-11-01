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
    var text = ( !this.props.stage.value['fileUploaded'] ? 'Welcome! Start by pulling your data.' : 'Select the classifiers and tags you want.');

    var statusContainer = {
      backgroundImage: 'url(../images/bg-' + image + '.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50%',
      backgroundPosition: 'center center',
      height: '100%'
    }
    var bgImport = {
      marginTop: '0px',
      width: '350px',
    }
    var bgSelect = {
      marginTop: '0px',
      width: '300px',
      opacity: '0.8'
    }
    var statusText = {
      color: '#FF763D',
      fontFamily: 'Lato, sans-serif',
      fontWeight: '600',
      marginBottom: '50px',
      marginTop: '150px',
      textAlign: 'center',
    }

    return (
      <div style={statusContainer}>
        <h1 style={statusText}>{text}</h1>
      </div>
    );

  },
});


module.exports = StatusUpdates;
