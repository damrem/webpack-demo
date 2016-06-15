import React from 'react';
import HelloWorld from './HelloWorld';
import NameInput from './NameInput';

export default
class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {nameValue: 'init'};
		this.submitCallback = this.submitCallback.bind(this);
	};

	render(){
		return (
			<div>
				
				<HelloWorld 
				nameValue={this.state.nameValue}
				/>
				
				<NameInput 
				nameValue={this.state.nameValue} 
				submitCallback={this.submitCallback}
				/>

				<NameInput 
				nameValue={this.state.nameValue} 
				submitCallback={this.submitCallback}
				/>
			</div>
		);
	};

	submitCallback(subState){
		this.setState(subState);
	};
}