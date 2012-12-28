define('app/views/contributordetail-view',
	[
	 'lib/text!app/templates/contributor-details.html',
	 'lib/ember' 
	 ],
	function(contributorDetails){
	
		return Ember.View.extend({
			template:Ember.Handlebars.compile(contributorDetails)
		});
	
	}
);