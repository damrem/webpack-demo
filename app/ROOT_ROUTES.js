
import Layout from './Layout';
import Home from './Home';
import App from './App';
import themeRoutes from './themes/routes';

export default {
	path:'/',
	component:Layout,
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
				themeRoutes
			
	]
};