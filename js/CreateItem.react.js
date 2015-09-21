var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');



var CreateItem = React.createClass({
  getInitialState: function() {
        return {
          email: ''
          };
      },
  getDefaultProps: function(){
    return {
          user : Parse.User.current()
    };
  },
  handleChangeEmail: function(event) {
    this.setState({email: event.target.value});
  },
  onKeyDown: function(e) {
    var holder = this;
    if (e.keyCode === 13) {
      holder.handleSubmit();
      //alert("this");
    }
  },
  handleSubmit: function(){
      var email = this.state.email;
      var currentUser = Parse.User.current();

      var acl = new Parse.ACL();
      acl.setPublicReadAccess(false);
      acl.setWriteAccess(currentUser.id, true);
      acl.setReadAccess(currentUser.id, true);
      acl.setRoleReadAccess("Admin",true);
      acl.setRoleWriteAccess("Admin",true);

    // var id = currentUser.id;
    //  var acl = {
    //       "role:Admin": {  "read": true, "write": true },
    //       id : { "read": true, "write": true }
    //   };

      var boltCreator = ParseReact.Mutation.Create('BoltItem', 
      {
        user: currentUser,
        text: email,
        ACL: acl
      });

      // Create three new Pizzas with these toppings
      boltCreator.dispatch();
      //location.reload();

  },
  render: function() {
    // Render the text of each comment as a list item
    var email = this.state.email;

    return (
      <div className="col-sm-12" onKeyDown={this.onKeyDown}>
      <input type="text" className="form-control col-sm-8" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Email" onChange={this.handleChangeEmail} required/>
      <input value="Create!" type="submit" onClick={this.handleSubmit} className="col-sm-12 col-xs-12 btn btn-primary" />
      </div>
    );
  },

  remove: function(){
    ParseReact.Mutation.Destroy(this.props.bolt).dispatch();
  }
      
  });


module.exports = CreateItem;