import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
	React.createElement(App), 
	document.body.appendChild(
		document.createElement('div')
	)
);
