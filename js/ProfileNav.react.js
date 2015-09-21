var Parse = require('parse').Parse;
var React = require('react');


var ProfileNav = React.createClass({

      getInitialState: function() {
        return {
          email: 'adam.cragg@gmail.com',
          password: 'test'
        };
      },
      
      logOut: function (){
        //alert("logout fired");
        Parse.User.logOut();
      },
      render: function() {
        
        //Parse.User.logOut();
        return (
          <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li handleClick={this.logOut}><div onClick={this.logOut} href="#" className="btn btn-danger">Separated link</div></li>
                  </ul>
                </li>
          );
      }
      
      });


module.exports = ProfileNav;