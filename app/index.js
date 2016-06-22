import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';
import ROOT_ROUTES from './ROOT_ROUTES';


import Layout from './Layout';
import Home from './Home';
import App from './App';
//import ThemeState from './ThemeState';

require('normalize.css');
require('./reset.scss');
require('./main.scss');




ReactDOM.render(
	
	(
		<Router
		history={hashHistory}
		routes={ROOT_ROUTES}
		/>
	),
	
	document.body.appendChild(
		document.createElement('div')
	)
);
