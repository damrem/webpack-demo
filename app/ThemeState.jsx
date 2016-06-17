import React from 'react';
import Route from 'react-router';
import _ from 'lodash';
import {ThemeManager, Theme} from './ThemeManager';

export default
class ThemeState extends React.Component{
	
	constructor(){
		super();
		this.state = {
			themes: []
		};
	}

	// <Route path="list" component={ThemeList}
	render(){
		console.log('render');
		return <ThemeList themes={this.state.themes}/>;
	}

	

  
	componentDidMount() {
		console.log('componentDidMount');
	
		var that = this;


		ThemeManager.getList()
		.then(themeList => that.setState({
			themes: themeList
		}));
		
	}
}

export
class ThemeList extends React.Component{

	render(){
		console.log(this.props.themes);
		
		return (
			<ul>
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
		return <ThemeItem theme={_.sample(this.props.themes)}/>;
	}
}

export
class ThemeItem extends React.Component{
	render(){
		return (
			<div class="Theme">
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
			</div>
		);
	}
}


