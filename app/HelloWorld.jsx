//console.log(React);

import React from 'react';

export default 
class HelloWorld extends React.Component{
	render(){
		return (
			<div>
				Hello {this.props.nameValue}
			</div>
		);
	}
}

