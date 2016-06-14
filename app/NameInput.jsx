import React from 'react';

module.exports = React.createClass({
	
	
	getInitialState: function(){
		return {nameValue: this.props.nameValue};
	},

	render: function(){
		console.log('render');
		return (
			
			<form
			onSubmit={this.handleSubmit}
			>
				<input 
				type="text" 
				value={this.state.nameValue}
				onChange={this.handleChange}
				/>
				
				<input 
				type="submit"
				/>

			</form>
		);
	},

	handleChange: function(evt){
		console.log(evt.target.value);
		this.setState({
			nameValue: evt.target.value
		});
	},

	handleSubmit: function(evt){
		evt.preventDefault();
		this.props.onSubmit(this.state);
	}
})