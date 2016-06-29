import React from 'react';
import ThemeItem from './ThemeItem';
import {ThemeManager} from './ThemeManager';

export default
class ThemeList extends React.Component{
	render(){
		console.log(this.props);
		return (!!this.props.themes &&
			<ul className="ThemeList noBullet">
				
				{ this.props.themes.map((theme, i) => 
					<li key={i}>
						<ThemeItem theme={theme}/>
					</li>) 
				}
			</ul>
		);
	}
}

