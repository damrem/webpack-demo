import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';

import Layout from './Layout';
import Home from './Home';
import App from './App';
import ThemeState from './ThemeState';

require('normalize.css');
require('./reset.scss');
require('./main.scss');


ReactDOM.render(
	(

		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}/>
				<Route path="app" component={App}/>
				<Route path="themes" component={ThemeState}/>
			</Route>
		</Router>
	),

	
	document.body.appendChild(
		document.createElement('div')
	)
);
