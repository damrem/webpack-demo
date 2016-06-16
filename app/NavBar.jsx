import React, {Component} from 'react';
import {Link} from 'react-router';
require('./NavBar.scss');

export default class NavBar extends Component{
	render(){
		return(
			<ul id="NavBar">
				<li><Link to="/home">Home</Link></li>
	        	<li><Link to="/app">App</Link></li>
	        	<li><Link to="/themes">Themes</Link></li>
	        </ul>
		);
	}
}