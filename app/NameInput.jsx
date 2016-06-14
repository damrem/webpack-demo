import React from 'react';

module.exports = React.createClass({
	
	
	getInitialState: function(){
		return {nameValue: this.props.nameValue};
	},

	render: function(){
		console.log('render');
		return (
			
			<form
			onSubmit={this.submitCallback}
			>
				<input 
				type="text" 
				value={this.state.nameValue}
				onChange={this.changeCallback}
				/>
				
				<input 
				type="submit"
				/>

			</form>
		);
	},

	changeCallback: function(evt){
		console.log(evt.target.value);
		this.setState({
			nameValue: evt.target.value
		});
	},

	submitCallback: function(evt){
		evt.preventDefault();
		this.props.submitCallback(this.state);
	}
})