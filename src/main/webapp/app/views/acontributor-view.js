define('app/views/acontributor-view',
	[
	 'lib/text!app/templates/acontribute.html',
	 'lib/ember' 
	 ],
	function(acontribute){
	
		return Ember.View.extend({
			template:Ember.Handlebars.compile(acontribute)
		});
	
	}
);