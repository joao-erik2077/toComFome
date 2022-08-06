if (typeof localStorage === 'undefined' || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	var restauranteStorage = new LocalStorage('./scratch');
}

module.exports = restauranteStorage;