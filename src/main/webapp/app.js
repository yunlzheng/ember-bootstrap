define('app',[
   'app/router',
   'app/models/person',
   'app/views/repos-view',
   'app/views/contributordetail-view',
   'app/views/acontributor-view',
   'app/views/application-view',
   'app/views/allcontributors-view',
   'app/controllers/aContributorController',
   'app/controllers/allContributorsController',
   'lib/jquery',
   'lib/handlebars',
   'lib/ember'
   ],function(Router,
		   Person,
		   ReposView,DetailsView ,OneContributorView,ApplicationView,AllContributorsView,
		   OneContributorController,AllContributorsController){
	
	var App = Ember.Application.create({
		
		VERSION:'1.0',
		rootElement:'#bootstrap',
		Router:Router,
		Person:Person,
		ReposView:ReposView,
		DetailsView :DetailsView ,
		OneContributorView:OneContributorView,
		AllContributorsView:AllContributorsView,
		ApplicationView:ApplicationView,
		OneContributorController:OneContributorController,
		ApplicationController:Ember.Controller.extend(),
		AllContributorsController:AllContributorsController,
		ready:function(){
			//应用程序初始化完成自动调用
		}
		
	});
	
	return window.App = App;
	
});