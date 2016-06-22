import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';
import {THEME_ROUTES} from './themes/ThemeState';

import Layout from './Layout';
import Home from './Home';
import App from './App';
//import ThemeState from './ThemeState';

require('normalize.css');
require('./reset.scss');
require('./main.scss');

const ROOT_ROUTES = {
	path:'/',
	component:Layout,
	childRoutes:[
		{
			indexRoute: {component: Home},
			childRoutes:[
				{
					path:'/app',
					component: App
				},
				THEME_ROUTES
			]
		}
	]
};


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
