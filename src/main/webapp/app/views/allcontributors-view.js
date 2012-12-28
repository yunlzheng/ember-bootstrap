define('app/views/allcontributors-view',[
    'lib/text!app/templates/contributors.html',                                    	
	'lib/ember'                                  
   ],function(contributors){
	
		return Ember.View.extend({
			
			template:Ember.Handlebars.compile(contributors)
			
		});
	
   }
);