define('app/views/repos-view',
	[
	 'lib/text!app/templates/repos.html',
	 'lib/ember' 
	 ],
	function(repos){
	
		return Ember.View.extend({
			template:Ember.Handlebars.compile(repos)
		});
	
	}
);