import React from 'react';
import NavBar from './NavBar';
import ROOT_ROUTES from './ROOT_ROUTES';

export default React.createClass({
	render() {
		return (

			<div>
				<NavBar routes={ROOT_ROUTES}/>
				<div>{this.props.children}</div>
			</div>

		);
	}
})