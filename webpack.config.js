const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const validate = require('webpack-validator');


const PATHS = {
	app: [
		path.join(__dirname, 'app'),
		path.join(__dirname, 'node_modules', 'normalize.css')
	],
	/*style: [
		path.join(__dirname, 'node_modules', 'purecss'),
		path.join(__dirname, 'app', 'main.css'),
		path.join(__dirname, 'app', 'other.scss'),
		path.join(__dirname, 'app', 'NavBar.scss')
	],*/
	//images: path.join(__dirname, 'app/images'),
	build: path.join(__dirname, 'build')
};

const parts = require('./lib/parts');

//module.exports = {


const common = {

	// Entry accepts a path or an object of entries.
	// We'll be using the latter form given it's
	// convenient with more complex configurations.
	entry: {
		app: PATHS.app/*,
		style: PATHS.style*/
		/*,
		vendor: ['react']*/

	},

	output: {
		path: PATHS.build,
		filename: '[name].js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo'
		})
	],

				resolve: {
		      		extensions: ['', '.js', '.jsx']
		    	},

		    	module:{
					loaders:[
						{
							test: /\.jsx?$/,
					  //loaders: ['babel?cacheDirectory']//,
					  		loader:'babel',
				        	query: {
				        		cacheDirectory:true,
				          		presets: ['es2015','react']
				        	},
					  		include: PATHS.app,
					  		exclude: /node_modules/
						}
				  	]
				}
    
};


var config;

//process.env.BABEL_ENV = TARGET;


// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
	case 'build':
	case 'stats':

		//config = merge(common, {});
		config = merge(

			{
				devtool: 'source-map',
				output: {
					path: PATHS.build,
					publicPath: '/webpack-demo/',
					filename: '[name].[chunkhash].js',
					// This is used for require.ensure. The setup
					// will work without but this is useful to set.
					chunkFilename: '[chunkhash].js'
				}
			},

			
			
			parts.clean(PATHS.build),

			parts.setFreeVariable(
				'process.env.NODE_ENV',
				'production'
			),

			parts.extractBundle({
				name: 'vendor',
				entries: [
					'react',
					'normalize.css'//, 
					//'purecss'
					//'webpack'
				]
			}),
			
			common,

			//parts.translateJSX(PATHS.app),

			parts.minify(),

			parts.setupCSS(PATHS.app),

			{
				test: /\.(jpg|png)$/,
				loader: 'url?limit=25000',
				include: PATHS.app
			},

			parts.extractCSS(PATHS.app),

			parts.purifyCSS([PATHS.app])

		);
		break;
	default:
		config = merge(
			common,
			{
				devtool: 'eval-source-map'
			},
			//parts.setupCSS(PATHS.app),
			parts.setupCSS(PATHS.app),
			parts.devServer({
				// Customize host/port here if needed
				host: process.env.HOST,
				port: process.env.PORT
			})
		);
}

module.exports = validate(config);