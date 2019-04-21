define([
		'underscore',
		'backbone',
		'../templates/main.html',
	],
	function(
		_,
		Backbone,
		MainTemplate
	) {
		"use strict";
		
		return Backbone.View.extend({
			template : _.template(MainTemplate),
			
			initialize : function() {
				console.log( 'Wahoo!' );
				console.log( 'Wahoo!' );
				this.render();
			},
			
			render : function() {
				console.log( 'Wahoo!',this.$el );
				this.$el.append(this.template({}));
				console.log( 'Wahoo!' );
				return this;
			}
		});
	}
);
