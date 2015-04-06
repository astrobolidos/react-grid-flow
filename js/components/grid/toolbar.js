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

module.exports = Toolbar;