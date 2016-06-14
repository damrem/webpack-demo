import React from 'react';
import HelloWorld from './HelloWorld';
import NameInput from './NameInput';

module.exports = React.createClass({

	getInitialState() {
	    return {
	        nameValue: 'init'  
	    };
	},

	render(){
		return (
			<div>
				
				<HelloWorld 
				nameValue={this.state.nameValue}
				/>
				
				<NameInput 
				nameValue={this.state.nameValue} 
				onSubmit={this.onSubmit}
				/>

				<NameInput 
				nameValue={this.state.nameValue} 
				onSubmit={this.onSubmit}
				/>
			</div>
		);
	},

	onSubmit(subState){
		this.setState(subState);
	}
});