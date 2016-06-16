import React from 'react';

export default
class ThemeListRoute extends React.Component{
	
	constructor(){
		super();
		this.state = {
			themes: []
		};
	}

	render(){
		return <ThemeList themes={this.state.themes}/>;
	}

	parseText(text) {
    	var rxp = /^[0-9]{1,2}\.\t([^\t]{3,})\t([\+\-0]\d*)\t(\d+)\t(\d+)\t(\d+)$/gmi;
    	var themes = [];
    	var match;
    	while (!!(match = rxp.exec(text))) {
      		themes.push({
        		label: match[1],
        		//delta: parseInt(match[2]),
        		pros: parseInt(match[3]),
        		cons: parseInt(match[5]),
        		neutral: parseInt(match[4])
    		});
    	};
    	return themes;
	}
  
  	fetchData() {
	    return fetch('https://gist.githubusercontent.com/damrem/840a2329bf6d699de4ba662b4055c83a/raw/fedf377c6879ab3d1cd618be6077bf26994835e8/ld-voting-results.md')
    	.then(response => response.text());
  	}

  
  	componentDidMount() {
    
    	var that = this;

    	this.fetchData()
      	.then(
        	function(text) {
          		//if (!that.isMounted()) return;
          		that.setState({
            		themes: that.parseText(text)
          		});
        	}
      	);
  	}
}

export
class ThemeList extends React.Component{

	render(){
		console.log(this.props.themes);
		
		return (
			<ul>
				{this.props.themes.map((theme, i) => <ThemeItem key={i} theme={theme}/>)}
			</ul>
		);
	}
}

export
class ThemeItem extends React.Component{
	render(){
		return (
			<li>{this.props.theme.label}</li>
		);
	}
}


