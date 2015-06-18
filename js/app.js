window.React = require('react/addons');
require('../styles/site.scss'); 
require('../styles/animation.scss');

var React = require('react');  
var Toolbar = require('./components/grid/toolbar');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var SideBar = React.createClass({
	render: function() {
		return (
			<div className="sideBar col-1-5 ">
				{this.props.children}
			</div>
		)
	}
});

var Body = React.createClass({
	render: function() {
		return <div className="body col-4-5">
			{this.props.children}
		</div>
	}
})

var Control = React.createClass({
	render: function() {
		var classNames = 'clearBoth ' + this.props.className;
		return <input type="text" name="iText" className={classNames} value={this.props.value} />
	}
})


var Dynamic = React.createClass({
	getInitialState: function() {
		return { info: [] }
	},
	componentDidUpdate: function() {
		console.log('componentDidUpdate');
		var component = this;
		setTimeout(function() {
			for(i = 0; i < component.state.info.length; i++) {
				component.state.info[i].className = '';
			}
			component.setState({info: component.state.info});	
		}, 3000);
	},
	handleAddClick: function(event) {
		this.state.info.push({name: 'control' + this.state.info.length, value:this.state.info.length, className:''});
		this.setState({info: this.state.info})
	},
	handleUpdateClick: function(event) {
		var component = this;
		for(i = 0; i < this.state.info.length; i++) {
			this.state.info[i].value = this.state.info[i].value + 3;
			this.state.info[i].className = 'pulse';
		}
		this.setState({info: this.state.info});
	},
	render: function() {
		return <div className="col-2-3">
			<input type="button" name="btnAdd" onClick={this.handleAddClick} value="Add control" />
			&nbsp;
			<input type="button" name="btnUpdate" onClick={this.handleUpdateClick} value="Update values" />
			<br/>
			<CSSTransitionGroup transitionName="update" transitionAppear={true}>
				{this.state.info.map(function(m, i){
					return <Control key={i} value={m.value} className={m.className} />
				})}
			</CSSTransitionGroup>
		</div>
	}
})

var App = React.createClass({
	render: function() {
		return (
			<div className="body grid">			
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
				<Body>
					<h1>Welcome</h1>
					<Dynamic />
				</Body>
			</div>
		)
	}
});

React.render(<App />, document.body);