var Parse = require('parse').Parse;
var React = require('react/addons');

var FileForm = React.createClass({

    // data_uri: a placeholder for uploading the file
    // parsedData: the meat and potatoes. This is fired on the initial selection of the file from the browser
    getInitialState: function() {
        return {
            data_uri: null,
            parsedData: null,
        };
    },

    // prevent form from submitting; we are going to capture the file contents
    // keep but ignore
    handleSubmit: function(e) {
        e.preventDefault();
    },

    // when a file is passed to the input field, retrieve the contents as a
    // base64-encoded data URI and save it to the component's state
    handleFile: function(e) {
        var self = this;
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onload = function(upload) {
            self.setState({
                data_uri: upload.target.result
            });
        }
        reader.readAsDataURL(file);



        // for debugging only
        //console.log(file);

        //Once the file is uploaded and in the browser temp files we can parse it.
        this.parseFile(file);

    },

    // this takes a field fileUploadControl and uses PapaParse to structure it.
    // because of some shortcomings with the npm version of PapaParse (babyparse)
    // I have gone with the normal PapaParse version so the script must be loaded on the page that calls it.
    /**
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parsley.js/2.1.2/parsley.js"></script>**/
    parseFile: function(fileUploadControl) {

        var self = this;


        // default configs for PapaParse besides the header field which is set as true.
        // http://papaparse.com/docs#config
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
                var builtHeader = [];
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

        ////////////////// beginning of parsing function
        Papa.parse(fileUploadControl, confiVariables);
        ////////////////// end of parsing function

    },
    render: function() {
        // styling of file field to be customized based on Jerry's design
        var fileFormContainer = {
            textAlign: 'center',
            width: '100%'
        }
        var buttonUpload = {
            backgroundColor: 'white',
            border: '3px solid #ff763d',
            borderRadius: '20px',
            color: '#ff763d',
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

        if (this.props.stage.value['fileUploaded'] == true) {
            return (<div></div>);
        } else {
            return (
                <div style={fileFormContainer}>
                    <label className="w-button" style={buttonUpload} htmlFor="fileupload">UPLOAD</label>
                    <input className="hidden" type="file" onChange={this.handleFile} id="fileupload"/>
                </div>
            );
        };
    },
});


module.exports = FileForm;
