//console.log(React);

import React from 'react';

module.exports = React.createClass({
	render(){
		return (
			<div>
				Hello {this.props.nameValue}
			</div>
		);
	}
});

