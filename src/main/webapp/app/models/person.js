define('app/models/person',
	['lib/ember'],
	function(){

		var Person =  Ember.Object.extend({
			
			loadRepos: function(){
			      
				$.ajax({
			        url: 'https://api.github.com/users/%@/repos'.fmt(this.get('login')),
			        context: this,
			        dataType: 'jsonp',
			        success: function(response){
			          this.set('repos',response.data);
			        }
			     });
				
			},
			loadMoreDetails:function(){
				
				$.ajax({
				      url: 'https://api.github.com/users/%@'.fmt(this.get('login')),
				      context: this,
				      dataType: 'jsonp',
				      success: function(response){
				        this.setProperties(response.data);
				      }
		
				});
			}
			
		});
		
		Person.reopenClass({
			
			allContributors:[],
			find:function(){
				$.ajax({
				      url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
				      dataType: 'jsonp',
				      context: this,
				      success: function(response){
				    	  
				        response.data.forEach(function(person){
				        	
				        	this.allContributors.addObject(App.Person.create(person))
				        	
				        },this);
				      
				      }
				});
				
				return this.allContributors;
				
			},
			findOne: function(username){
				
				  var person = App.Person.create({
				     login: username
				  });

				  $.ajax({
				    url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
				    dataType: 'jsonp',
				    context: person,
				    success: function(response){
				      this.setProperties(response.data.findProperty('login', username));
				    }
				  })

				  return person;
			}
		});
		
		return Person;
	}
);