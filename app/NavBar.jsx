import React, {Component} from 'react';
import {Link} from 'react-router';
require('./NavBar.scss');

export default class NavBar extends Component{
	render(){

		console.log(this.props.routes);

		let basePath = this.props.routes.path;

		let routes = this.props.routes.childRoutes[0];
		
		return(

			<ul id="NavBar">

				{(!!this.props.routes ? <li>
					<Link 
					to={ basePath==='/' ? basePath : '/'+basePath }
					>
						{ this.props.routes.indexRoute.title }
					</Link>
				</li>:<li/>)}

				{
					!!this.props.routes.childRoutes && this.props.routes.childRoutes.map(
						(childRoute, i)=>
						<li key={i}>
							<Link 
							to={ ( basePath!=='/' ? '/'+basePath+'/' : basePath ) + childRoute.path }
							>
								{ childRoute.title||childRoute.path }
							</Link>
						</li>
					)
				}
			</ul>
		);
	}
}