window.React = require('react');
require('../styles/site.scss');

var React = require('react');

var Toolbar = React.createClass({
	render: function() {
		return (
			<div className="grid">
				<div className="col-1-8">&nbsp;</div>
				<div className="col-5-6" styles={{textAlign:'center'}}>
					{this.props.children}
				</div>
				<div className="col-1-8">&nbsp;</div>
			</div>
		)
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="grid">
				<Toolbar>
					<p>This is my toolbar</p>
				</Toolbar>

				<div className="col-1-8">
					welcome to react grid flow
				</div>
			</div>
		)
	}
});

React.render(<App />, document.body);