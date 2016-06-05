webpackJsonp([0,3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	//require('./main.css');
	__webpack_require__(1);
	
	var component = __webpack_require__(34);
	
	document.body.appendChild(component());

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = function () {
	
		console.log('plop');
	
		var element = document.createElement('h1');
	
		element.innerHTML = 'Hello Damien!';
		element.className = 'pure-button';
	
	
		return element;
	};

/***/ }

});
//# sourceMappingURL=app.js.map