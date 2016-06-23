import ThemeLayout from './ThemeLayout';
import RandomTheme from './RandomTheme';
import ThemeList from './ThemeList';

export default {
	path:'themes',
	title:'Themes',
	component:ThemeLayout,
	childRoutes:[
		{
			indexRoute: {
				component: RandomTheme,
				title: 'RandomTheme'
			},
			childRoutes:[
				{
					path:'list',
					title:'ThemeList',
					component: ThemeList
				}
			]
		}
	]
};

