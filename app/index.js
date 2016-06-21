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

	component:'div',
	childRoutes:[
		{
			path:'/',
			component: Layout,
			childRoutes:[
				{
					path:'/',
					component: Home
				},
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
	/*(

		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}/>
				<Route path="app" component={App}/>
				<Route path="themes" component={ThemeState}/>
			</Route>
		</Router>
	),*/

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
