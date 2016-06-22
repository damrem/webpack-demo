import React from 'react';
import Route from 'react-router';
import _ from 'lodash';
import {ThemeManager, Theme} from './ThemeManager';
import Clear from '../Clear';

require("./themes.scss");

export
const THEME_ROUTES = {
	path:'themes',
	title:'Themes',
	getChildRoutes(partialNextState, callback){
		require.ensure([], require=>
			callback(null, [
				ThemeList,
				RandomTheme
			])
		)
	},

	getComponent(nextState, callback){
		require.ensure([], require=>
			callback(null, ThemeRoot)
		)
	}
};

export
class ThemeRoot extends React.Component{
	
	constructor(){
		super();
		this.state = {
			themes: []
		};
	}

	render(){
		return (
			//<div>
			// <ThemeList themes={this.state.themes}/>
			<RandomTheme themes={this.state.themes}/>
			//</div>
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

export
class ThemeList extends React.Component{

	render(){
		return 
			(<ul className="ThemeList noBullet">
				<li>list</li>
				{ this.props.themes.map((theme, i) => 
					<li key={i}>
						<ThemeItem theme={theme}/>
					</li>) 
				}
			</ul>
		);
	}
}

export
class RandomTheme extends React.Component{

	render(){
		console.log(this.props.themes);
		return (!!this.props.themes && !!this.props.themes.length) 
		? <ThemeItem className="ThemeItem" theme={_.sample(this.props.themes)}/> 
		: <div/>;
	}
}

export
class ThemeItem extends React.Component{
	render(){
		return (
			<div className="ThemeItem">
				<span>{this.props.theme.label}</span>
				<div>
					<div 
					style={ this.props.theme.getGaugeStyle('pros') }
					>&nbsp;</div>
					<div 
					style={ this.props.theme.getGaugeStyle('neutral') }
					>&nbsp;</div>
					<div 
					style={ this.props.theme.getGaugeStyle('cons') }
					>&nbsp;</div>
				</div>
				<Clear/>
			</div>
		);
	}
}


