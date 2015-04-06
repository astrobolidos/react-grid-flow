var React = require('react');  

var SideBar = React.createClass({
	render: function() {
		return (
			<div className="sideBar col-1-5">
				{this.props.children}
			</div>
		)
	}
});

modules.exports = SideBar;