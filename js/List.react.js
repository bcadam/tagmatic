var Parse = require('parse').Parse;
// ParseReact sits on top of your Parse singleton
var ParseReact = require('parse-react');
var React = require('react');

var Item = require('./Item.react.js');
var CreateItem = require('./CreateItem.react.js');



var List = React.createClass({
  mixins: [ParseReact.Mixin],
  observe: function() {
    // Subscribe to all Comment objects, ordered by creation date
    // The results will be available at this.data.comments
    //comments: (new Parse.Query('BoltItem')).equalTo("user",Parse.User.current()).ascending('createdAt')
    return {
      comments: (new Parse.Query('BoltItem')).descending('createdAt')
    };
  },

  getInitialState: function() {
    return {
      user: Parse.User.current()
    };
  },
  render: function() {
    // Render the text of each comment as a list item
    var counter = 0;
    return (
      <div>
      <div>
      <div className="col-sm-9">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Bolts</h3>
            <div className="pull-right">
              <span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
              </span>
            </div>
          </div>
          <div className="panel-body">
            <CreateItem />
          </div>
          <table className="table table-hover" id="dev-table">
            <thead>
              <tr>
                <th style={{border:"none"}}>#</th>
                <th className="col-sm-12" style={{border:"none"}}>Address</th>
                <th className="col-sm-12" style={{border:"none"}}></th>
              </tr>
            </thead>
            <tbody>
   
              {this.data.comments.map(function(c) {
                counter = counter+1;
                return (
                  <Item counter={counter} key={c.id} bolt={c} />
                  );
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
         

    );
  }
      
  });


module.exports = List;