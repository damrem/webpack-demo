import React from 'react';
import Clear from '../Clear';
import {ThemeManager} from './ThemeManager';

require("./themes.scss");

export
class ThemeItem extends React.Component{
	render(){
		return (
			<div className="ThemeItem">
				<span>{this.props.theme.label}</span>
				<div>
					<div style={ this.props.theme.getGaugeStyle('pros') }>&nbsp;</div>
					<div style={ this.props.theme.getGaugeStyle('neutral') }>&nbsp;</div>
					<div style={ this.props.theme.getGaugeStyle('cons') }>&nbsp;</div>
				</div>
				<Clear/>
			</div>
		);
	}
}


