// var React = require('react');
// var ReactDOM = require('react-dom');
// var Parse = require('parse');
// var OneMonarch = require('./TagMaticApp.react.js');
// var TwitterPull = require('./TwitterPull.react.js');
// // Connection URL 
// var url = 'mongodb://heroku_fmnvd22w:o92tek028huob675crb78fvepj@ds041934.mongolab.com:41934/heroku_fmnvd22w';
// //var myDb = require('mongolab-provider').init('heroku_fmnvd22w', 'Vy94bRY1c4WizezbKV65B8OtWqc=');
// // Insert your app's keys here:
// Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');




// ReactDOM.render(
//     <OneMonarch />,
//     document.getElementById('app')
// );



// import ReactDOM from 'react-dom';
// import React from 'react';
// import routes from './routes';

// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

// import createHistory from 'history/lib/createHashHistory';

// var history = createHistory({
//   queryKey: false
// });


// ReactDOM.render(
//   <Router history={history} routes={routes} />,
//   document.getElementById('app')
// );


import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link,IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import TagMaticApp from './TagMaticApp.react.js';
import BlankApp from './blankapp.js';
import NotFound from './NotFound.js';
import App from './TagMaticApp.react.js';
import HomeThread from './HomeThread.js';
import HomeContent from './HomeContent.js';

var Parse = require('parse');

Parse.initialize('8jNBnCVreI02H6KRVJHeKvdQicDnUwMmCZeuisrO', 'oJ9u5BVMYDb4ajCvlXTcmoULRs6lMV6AALX8umlV');



// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         {<h1>App</h1>
//                 <ul>
//                   <li><Link to="/about">About</Link></li>
//                   <li><Link to="/inbox">Inbox</Link></li>
//                 </ul>}
//         {this.props.children}
//       </div>
//     )
//   }
// })



const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})



render((
  <Router history={browserHistory}>
  	
  	<Route path="/app/tagger" component={BlankApp}>
      	<IndexRoute component={ App }/>
    </Route>

    <Route path="/app" component={HomeThread}>
      	<IndexRoute component={ HomeContent }/>
    </Route>
     
    <Route path='*' component={NotFound}/>

  </Router>
), document.getElementById('app'))