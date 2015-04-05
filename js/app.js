window.React = require('react');
require('../styles/site.scss');

var React = require('react');

var App = React.createClass({
	render: function() {
		return <p>welcome to react grid flow</p>
	}
});

React.render(<App />, document.body);