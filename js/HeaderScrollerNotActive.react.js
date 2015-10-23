var React = require('react/addons');

//https://github.com/NaturalNode/natural

var HeaderScrollerNotActive = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function() {
        var self = this;
        var counter = 0;
        var tweet = self.props.header[0];

        var cardContainer = {
            display: 'inline-block',
            width: '230px',
            height: '150px',
            padding: '15px 2px 10px 2px',
            opacity: '1', //toggle this between 0.4 and 1 depending on whether its active or not when tagging
            verticalAlign: 'top',
            opacity:.3
        }
        var card = {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: '#efefef #eaeaea #eaeaea',
            backgroundColor: 'white',
            margin: '0px',
            opacity: '1',
            overflow: 'hidden'
        }
        var cardHeader = {
            backgroundColor: '#f2f2f2',
            borderBottom: '1px solid #efefef',
            fontWeight: 'bold',
            height: '30px',
            width: '100%',
            overflow: 'hidden',
            paddingLeft: '5px',
            paddingRight: '5px',
            textAlign: 'center'
        }
        var cardIcon = {
            opacity: '0.25'
        }
        var scrollWindow = {
            borderBottom: '1px solid #efefef',
            height: '120px',
            overflowX: 'hidden',
            overflowY: 'auto'
        }
        var hotKey = {
            backgroundColor: 'green',
            borderRadius: '50px',
            color: 'white',
            float: 'right',
            fontSize: '8px',
            fontWeight: 'bold',
            marginTop: '4px',
            padding: '1px 4px 1px 5px'
        }

        return (
            <div style={cardContainer}>
                <div style={card}>
                  <div style={cardHeader}>{tweet}</div>
                  <div style={scrollWindow}>
                    {
                        self.props.header[1].map(function(c) {
                        counter = counter + 1;
                        return (
                          <div key={c} className="col-xs-12" counter={counter} key={c.id}>{c}</div>
                          );
                        })
                    }
                  </div>
                </div>
              </div>
        );

    }
});


module.exports = HeaderScrollerNotActive;
