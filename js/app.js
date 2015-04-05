window.React = require('react');
require('../styles/site.scss');

var React = require('react');

var App = React.createClass({
	render: function() {
		return (
			<div class="grid">
				<div class="col-1-8">
					welcome to react grid flow
				</div>
			</div>
		)
	}
});

React.render(<App />, document.body);