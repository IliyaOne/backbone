define([
		'views/main-view'
	],
	function(
		MainView
	) {
		"use strict";
		
		return {
			initialize : function() {
				console.log( 'Wahoo!' );
				var app = new MainView({
					el : document.getElementById('content')
				});
			}
		};
	}
);