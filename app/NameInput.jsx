import React from 'react';

export default
class NameInput extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {nameValue: this.props.nameValue};

		this.changeCallback = this.changeCallback.bind(this);
		this.submitCallback = this.submitCallback.bind(this);
	}

	render(){
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
	}

	changeCallback(evt){
		console.log(evt.target.value);
		console.log(this.setState);
		this.setState({
			nameValue: evt.target.value
		});
	}

	submitCallback(evt){
		evt.preventDefault();
		this.props.submitCallback(this.state);
	}
}