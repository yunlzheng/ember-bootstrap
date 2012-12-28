define('app/views/application-view',[
    'lib/text!app/templates/subTitle.html',
    'lib/ember'
    ],function(subtitle){
	
		return Ember.ContainerView.extend({
			
			childViews:['headerView','mianView','footerView'],
			headerView:Ember.ContainerView.create({
				
				childViews:['titleView','subTitleView'],
				elementId:'header',
				tagName:'header',
				titleView:Ember.View.create({
					
					tagName:'h1',
					template:function(){
						return 'Ember-bootstrap';
					}
					
				}),
				subTitleView:Ember.View.create({
					
					template:Ember.Handlebars.compile(subtitle)
					
				})
				
			}),
			mianView:Ember.ContainerView.create({
				
				elementId:'mian',
				tagName:'section',
				childViews:['outletView'],
				outletView:Ember.View.create({
					template:Ember.Handlebars.compile('{{outlet}}')
				})
				
				
			}),
			footerView:Ember.ContainerView.create({
				
				elementId:'footer',
				tagName:'footer',
				childViews:['companyView'],
				companyView:Ember.View.create({
					emementId:'company-info',
					tagName:'p',
					template:function(){
						return '@Company4 Footer';
					}
				})
				
			})
			
			
		});
	
	}
);