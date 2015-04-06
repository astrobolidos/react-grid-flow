window.React = require('react');
require('../styles/site.scss');

var React = require('react');  
 
var Toolbar = React.createClass({
	render: function() {
		return (
			<div className="background">
				<div className="col-5-6 toolbar" styles={{textAlign:'center'}}>
					{this.props.children}
				</div>
			</div> 
		)
	}
});

var SideBar = React.createClass({
	render: function() {
		return (
			<div className="sideBar col-1-5 ">
				{this.props.children}
			</div>
		)
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="grid">
				<SideBar>
					<ul>
						<li>Mail</li>
						<li>Calendar</li>
						<li>People</li>												
					</ul>
				</SideBar>			
				<Toolbar>
					<p>This is my toolbar with centralized bar</p>
				</Toolbar>


			</div>
		)
	}
});

React.render(<App />, document.body);