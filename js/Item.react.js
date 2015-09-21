var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');


var Item = React.createClass({
  render: function() {
    // Render the text of each comment as a list item

    var bolt = this.props.bolt;
    return (
      <tr onClick={this.copyToClipboard} key={bolt.id}>
        <td>{this.props.counter}</td>
        <td>{bolt.text}</td>
        <td><i onClick={this.remove} className="fa fa-chain-broken pull-right"  style={{fontSize: 2 + 'em'}}></i></td>
      </tr>

    );
  },
  remove: function(){
    ParseReact.Mutation.Destroy(this.props.bolt).dispatch();
  },
  copyToClipboard: function(){
    var bolt = this.props.bolt;
    var text = bolt.text;
    //alert("cat");

    //var copySupported = document.queryCommandSupported('copy');
    //alert(copySupported);
    //window.clipboardData.setData("Text", text);
    //window.prompt("Copy to clipboard: Ctrl+C, Enter", text);

  }
      
  });


module.exports = Item;