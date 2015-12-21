var config = {
	apiPath: '//api.' + window.location.hostname + '/v0',
	languages: ['russian', 'english'],
	langStorageKey: 'language',
	storage: {
		get: localStorage.getItem.bind(localStorage),
		set: localStorage.setItem.bind(localStorage)
	},
	$: $
};

var language = config.storage.get(config.langStorageKey);
config.language = config.languages.indexOf(language) > -1 ?
	language :
	config.languages[0];

var api = require('./api')(config);
config.api = api;

module.exports = config;
