import React from 'react';
import {ThemeItem} from './ThemeState';
import {ThemeManager} from './ThemeManager';

export
class ThemeList extends React.Component{

	constructor(){
		super();
		this.state = {themes:[]};
	}

	render(){
		console.log(this.state)
		return (
			<ul className="ThemeList noBullet">
				
				{ this.state.themes.map((theme, i) => 
					<li key={i}>
						<ThemeItem theme={theme}/>
					</li>) 
				}
			</ul>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
		var that = this;
		ThemeManager.getList()
		.then(function(themes){
			that.setState({themes:themes})
		});
	}
}

