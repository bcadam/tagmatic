import React from 'react';
// import Parse from 'parse';
// import ParseReact from 'parse-react';
// Parse.initialize('pp9waK9ticOFbhrJzrdITkRVQfCycHLqNPj2ZrN6', '8UXFi3hzHgbKWoMZIIX3ZgUg0tHKPzSK6w8Ul0M6');
import RaisedButton from 'material-ui/lib/raised-button';
import { Link } from 'react-router';
import Check from 'material-ui/lib/svg-icons/toggle/check-box';





const style = {
  margin: 12,
};

var HomeContent = React.createClass({
	
        render() {
            return (
                <div style={{marginTop:'20px'}}>
                	<div className='col-xs-12'>

	                	<div className='col-xs-12 well' style={{marginBottom:'20px'}}>
	                		<div className="col-xs-3">
	                			<img className="img img-responsive" src="images/icons/shopnormal.png" />
	                		</div>
				            <div className="col-xs-8">
				              <h5 style={{color:'black',textAlign:'left'}}>Tag Tweets</h5>
				              <p style={{color:'black',textAlign:'left'}}>
				              	<li>Manually pull tweets about products you follow</li>
				              	<li>Create a custom classification engine that meets your needs</li>
				              	<li>Look for patterns in all the data</li>
				              	<li>Export it all to a csv or save your work for later</li>
				              </p>
    							<Link to="/app/tagger"><RaisedButton label="Get Started" primary={true} style={style} /></Link>
				            </div>
	                	</div>


	                	<div className='col-xs-12 well' style={{marginBottom:'20px'}}>
	                		<div className="col-xs-3">
	                			<img className="img img-responsive" src="images/icons/gearstools.png" />
	                		</div>
				            <div className="col-xs-8">
				              <h5 style={{color:'black',textAlign:'left'}}>Train Custom Classification Engines</h5>
				              <p style={{color:'black',textAlign:'left'}}>
				              	<li>Easy to use but powerful</li>
				              	<li>No more working with one size fits all computer intelligence</li>
				              	<li>Anyone can easily create a neural network and train it to work</li>
				              </p>
    							<RaisedButton disabled={true} label="Coming soon" primary={true} style={style} />
				            </div>
	                	</div>


	                	<div className='col-xs-12 well' style={{marginBottom:'20px'}}>
	                		<div className="col-xs-3">
	                			<img className="img img-responsive" src="images/icons/easel.png" />
	                		</div>
				            <div className="col-xs-8">
				              <h5 style={{color:'black',textAlign:'left'}}>Automatically Generate and Email Reports</h5>
				              <p style={{color:'black',textAlign:'left'}}>
				              	<li>Manually pull tweets about products you follow</li>
				              	<li>Create a custom classification engine that meets your needs</li>
				              	<li>Look for patterns in all the data</li>
				              	<li>Export it all to a csv or save your work for later</li>
				              </p>
    							<RaisedButton disabled={true} label="Coming soon" primary={true} style={style} />
				            </div>
	                	</div>


	                	<div className='col-xs-12 well' style={{marginBottom:'20px'}}>
	                		<div className="col-xs-3">
	                			<img className="img img-responsive" src="images/icons/global.png" />
	                		</div>
				            <div className="col-xs-8">
				              <h5 style={{color:'black',textAlign:'left'}}>Monitor millions of social posts</h5>
				              <p style={{color:'black',textAlign:'left'}}>
				              	<li>Manually pull tweets about products you follow</li>
				              	<li>Create a custom classification engine that meets your needs</li>
				              	<li>Look for patterns in all the data</li>
				              	<li>Export it all to a csv or save your work for later</li>
				              </p>
    							<RaisedButton disabled={true} label="Coming soon" primary={true} style={style} />
				            </div>
	                	</div>




                	</div>
                </div>
            )
        }
});

module.exports = HomeContent