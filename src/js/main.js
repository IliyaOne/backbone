import   '../../src/css/styles.css';

const printMe =  () => {
	   console.log('Updating print.js...')
}

(function() {
	"use strict";

	var libsPath = '../../libs/js/'; //libsPath relative to 'basePath'

	require.config({
		paths : {
			jquery : libsPath + 'jquery',		//return module but also keeps it in the global scope
			jqueryLoader : libsPath + 'jquery-loader',	//loads module and removes it from the global scope
			underscore : libsPath + 'underscore',
			underscoreLoader: libsPath + 'underscore-loader',
			backbone : libsPath + 'backbone',
			backboneLoader : libsPath + 'backbone-loader'
		},
		baseUrl : 'src/js',
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});

	require(['application'],
		function(App) {
			debugger;
			console.log( '123' );
			App.initialize();
		}
	);
})();


	 if (module.hot) {
	   module.hot.accept(printMe, function() {

		     console.log('Accepting the updated printMe module!');
		     printMe();
		   })
	 }
