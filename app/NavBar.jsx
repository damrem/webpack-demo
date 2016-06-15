import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavBar extends Component{
	render(){
		return(
			<ul>
	        	<li><Link to="/app">App</Link></li>
	        	<li><Link to="/inbox">Inbox</Link></li>
	        </ul>
		);
	}
}