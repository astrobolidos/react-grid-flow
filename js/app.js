window.React = require('react');
require('../styles/site.scss');

var React = require('react');  
var Toolbar = require('./components/grid/toolbar');

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
				<Toolbar>
					<p>This is my toolbar with centralized bar</p>
				</Toolbar>
				<SideBar>
					<ul>
						<li>Mail</li>
						<li>Calendar</li>
						<li>People</li>												
					</ul>
				</SideBar>

			</div>
		)
	}
});

React.render(<App />, document.body);