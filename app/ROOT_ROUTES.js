
import Layout from './Layout';
import Home from './Home';
import App from './App';
import {THEME_ROUTES} from './themes/ThemeState';

export default {
	path:'/',
	component:Layout,
	childRoutes:[
		{
			indexRoute: {
				component: Home,
				title: 'Home'
			},
			childRoutes:[
				{
					path:'app',
					title:'App',
					component: App
				},
				THEME_ROUTES
			]
		}
	]
};