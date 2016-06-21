import _ from 'lodash';

export 
class ThemeManager{

	static getList(){

		return ThemeManager.fetchData()
    	.then(ThemeManager.parseText);

	}

	static parseText(text) {
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
    	return themes.map(themeData => new Theme(themeData));
	}
  
  	static fetchData() {
  		console.log('fetch');
	    return fetch('https://gist.githubusercontent.com/damrem/840a2329bf6d699de4ba662b4055c83a/raw/fedf377c6879ab3d1cd618be6077bf26994835e8/ld-voting-results.md')
    	.then(response => response.text());
  	}

};

export 
class Theme{

	constructor(data){
		_.extend(this, data);
	}

	getGaugeStyle(propName){

		const colors={
			pros:'green',
			neutral:'yellow',
			cons:'red'
		};
		
		return {
			backgroundColor:colors[propName], 
			width: this.getPercentage(this[propName])+'%',
			float:'left' 
		}
	}
	

	getPercentage(value){
		return (value / (this.pros + this.neutral + this.cons)) * 100;
	}

}