var Parse = require('parse').Parse;
var React = require('react');


var Header = React.createClass({

      getInitialState: function() {
        return {
          user: this.props.user
        };
      },
      logClick: function(){

      	if (this.state.user != null)
      	{
      		Parse.User.logOut();
      	}


      },
      render: function() {
      	var user = this.state.user;
        var email = this.state.email;
        var password = this.state.password;

      	var button;
      	var buttonClass;

        if ( user == null)
        {
        	button = "";
        	buttonClass = "";
        }
		else
		{
        	button = "Logout";
        	buttonClass = "btn btn-warning btn-sm";
        }
        return (
          <header className="header fixed clearfix navbar navbar-static-top">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-4">

						<div className="header-left clearfix">

							<div className="logo smooth-scroll">
								<a className="hidden-sm hidden-xs" href="./index.html#banner"><img id="logo" src="images/logo.png" alt="EmailBolt"/></a>
							</div>

							<div className="site-name-and-slogan smooth-scroll">
								<div className="site-name"><a href="./index.html#banner">EmailBolt</a></div>
								<div className="site-slogan">One click disposable identities</div>
							</div>

						</div>

					</div>
					<div className="col-sm-8 col-md-8">

						<div className="header-right clearfix">

							<div className="main-navigation animated">

								<nav className="navbar navbar-default" role="navigation">
									<div className="container-fluid">

										<div className="navbar-header">
											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
												<span className="sr-only">Toggle navigation</span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
											</button>
										</div>

										<div className="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
											<ul className="nav navbar-nav navbar-right">
												<li><a href="./index.html#banner">Home</a></li>
												<li><a href="./index.html#about">About</a></li>
												<li><a href="./index.html#services">Services</a></li>
												<li><a href="./index.html#faqs">FAQs</a></li>
												<li><a href="./index.html#contact">Contact</a></li>
												<li><a onClick={this.logClick} className={buttonClass} href="#profile.html">{button}</a></li>
											</ul>
										</div>

									</div>
								</nav>

							</div>

						</div>

					</div>
				</div>
			</div>
		</header>



          );
      }
      
      });


module.exports = Header;