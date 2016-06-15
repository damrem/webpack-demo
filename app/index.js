import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,Link,hashHistory} from 'react-router';

import Layout from './Layout';
import Home from './Home';
import App from './App';

ReactDOM.render(
	(

		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home}/>
				<Route path="app" component={App}/>
			</Route>
		</Router>
	),

	
	document.body.appendChild(
		document.createElement('div')
	)
);
