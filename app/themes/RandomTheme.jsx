import React from 'react';
import ThemeItem from './ThemeItem';
import {ThemeManager} from './ThemeManager';

export
class RandomTheme extends React.Component{

	render(){
		console.log(this.props.themes);
		return (!!this.props.themes && !!this.props.themes.length) 
		? <ThemeItem className="ThemeItem" theme={_.sample(this.props.themes)}/> 
		: <div/>;
	}
}