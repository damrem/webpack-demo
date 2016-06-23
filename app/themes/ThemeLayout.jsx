import React from 'react';
import routes from './routes';
import NavBar from '../NavBar';
import {ThemeManager, Theme} from './ThemeManager';

require("./themes.scss");

export default
class ThemeLayout extends React.Component{
	
	constructor(){
		super();
		this.state = {
			themes: []
		};
	}

	render(){
		return (
			<div>
				<NavBar routes={routes}/>
				<div>{this.props.children}</div>
			</div>
		);
	}
  
	componentDidMount() {
		console.log('componentDidMount');
		ThemeManager.getList()
		.then(
			(themeList => this.setState({themes: themeList})).bind(this)
		);
	}
};