module.exports = function () {

	console.log('plop');

	var element = document.createElement('h1');

	element.innerHTML = 'Hello Damien!';
	element.className = 'pure-button';


	return element;
};