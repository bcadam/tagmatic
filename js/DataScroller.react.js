var Parse = require('parse').Parse;
var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

/** HeaderSlider is a class that displays the headers (columns) from a parsed file.
    The HeaderSlider contains mulitple HeaderBox(es), one for each header. **/

var DataScroller = React.createClass({
    mixins: [LinkedStateMixin],

    render: function() {
        var self = this;
        var tweetBox = {
            border: '3px solid #efefef',
            borderRadius: '5px',
            fontSize:'16px',
            left: '50%',
            top: '50%',
            marginLeft: '-200px',
            marginTop: '-170px',
            padding: '20px 10px',
            position: 'fixed',
            height: '200px',
            width: '400px',
        }
        var tweetBoxPre = {
            border: '3px solid #efefef',
            borderRadius: '5px',
            fontSize:'16px',
            left: '50%',
            top: '50%',
            marginLeft: '-200px',
            marginTop: '-390px',
            opacity: '0.15',
            padding: '20px 10px',
            position: 'fixed',
            height: '200px',
            width: '400px',
        }
        var tweetBoxPost = {
            border: '3px solid #efefef',
            borderRadius: '5px',
            fontSize:'16px',
            left: '50%',
            top: '50%',
            marginLeft: '-200px',
            marginTop: '50px',
            opacity: '0.15',
            padding: '20px 10px',
            position: 'fixed',
            height: '200px',
            width: '400px',
        }

        return (
            <div>
                <div id="tweetPre" className="col-xs-12" style={tweetBoxPre}>
                    {self.props.previous}
                </div>
                <div id="tweetLoc" className="col-xs-12" style={tweetBox}>
                    {self.props.tweet}
                </div>
                <div id="tweetPost" className="col-xs-12" style={tweetBoxPost}>
                    {self.props.next}
                </div>
            </div>
        );

    },
    componentDidMount: function() {
        document.getElementById('tweetLoc').innerHTML = this._textFormatter();
    },
    _textFormatter: function() {
        var self = this;
        var holderOfMatchingHeaders = self.props.headers;
        var arrayOfTweet = self.props.tweet.split(' ');
        var sizeOfTextDefault = document.getElementById('tweetLoc').style;
        //console.log(sizeOfTextDefault);

        var colorOfIgnoredText = 'grey';
        var sizeOfIgnoredText = '90%';

        var colorOfHighlightedText = 'green';
        var sizeOfHighlightedText = '140%';

        var colorOfLink = 'blue';
        var sizeOfLink = '120%';

        //This goes through the tweet which has been split into an array.
        for (var i = 0; i < arrayOfTweet.length; i++) {
            //console.log(arrayOfTweet[i]);

            //For each member of the tweet array it is matched against every column.
            for (var x = 0; x < holderOfMatchingHeaders.length; x++) {
                //console.log(holderOfMatchingHeaders[x]);

                //For every tag in the header column
                for (var y = 0; y < holderOfMatchingHeaders[x][1].length; y++) {
                    //console.log(holderOfMatchingHeaders[x][1][y]);

                    if (arrayOfTweet[i].toLowerCase() == holderOfMatchingHeaders[x][1][y].toLowerCase()) {
                        //console.log("Match on:" + holderOfMatchingHeaders[x][1][y]);
                        arrayOfTweet[i] = "<b style='color:" + colorOfHighlightedText + ";font-size:" + sizeOfHighlightedText + ";'>" + arrayOfTweet[i] + "</b>";
                    }

                };
            };

            //End of the line processes use this for things like URL formatting etc
            if (arrayOfTweet[i].indexOf("http://") == 0 || arrayOfTweet[i].indexOf("https://") == 0) {
                arrayOfTweet[i] = "<b style='color:" + colorOfLink + ";font-size:" + sizeOfLink + ";'>" + arrayOfTweet[i] + "</b>";
            }

            // matching for pefect match to junk/filler words
            // these are the most common words in the english language with the addition of RT 
            switch (arrayOfTweet[i].toLowerCase()) {
                case 'rt':
                case 'the':
                case 'be':
                case 'to':
                case 'of':
                case 'and':
                case 'a':
                case 'in':
                case 'that':
                case 'have':
                case 'I':
                case 'it':
                case 'for':
                case 'not':
                case 'with':
                case 'he':                
                    arrayOfTweet[i] = "<div style='color:" + colorOfIgnoredText + ";display:inline;font-size:" + sizeOfIgnoredText + ";'>" + arrayOfTweet[i] + "</div>";
                    break;
                default:
                    //console.log(e.keyCode);
                    break;
            }

        };

        var processedTweet = arrayOfTweet.join(" ");
        return processedTweet;

    }
});


module.exports = DataScroller;