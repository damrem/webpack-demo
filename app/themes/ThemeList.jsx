import React from 'react';
import ThemeItem from './ThemeItem';
import {ThemeManager} from './ThemeManager';

export default
class ThemeList extends React.Component{

	constructor(props) {
		super(props);
		this.state = {searchValue: ''};

		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onSearchChange(event) {
		this.setState({searchValue: event.target.value});
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState);
	    return true;  
	}

	render(){
		// console.log(this.props);
		return (!!this.props.themes &&
			<div>
				<input type="text" value={this.state.searchValue} onChange={this.onSearchChange}/>
				<ul className="ThemeList noBullet">
					
					{ this.props.themes.map((theme, i) => 
						<li key={i}>
							<ThemeItem theme={theme}/>
						</li>) 
					}
				</ul>
			</div>
		);
	}
}

