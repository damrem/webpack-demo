import React from 'react';
import NavBar from './NavBar';

export default React.createClass({
	render() {
		return (

			<div>
				<h1>App</h1>
				<NavBar/>
				<div>{this.props.children}</div>
			</div>

		);
	}
})