// Routing
devInfoApp.config( function($routeProvider) {
	$routeProvider

	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.when('/skillset', {
		templateUrl : 'app/components/skillset/skillset.html',
		controller  : 'skillsetController'
	})
	.when('/demoapps', {
		templateUrl : 'app/components/demoapps/demo_apps.html',
		controller  : 'demoAppsController'
	})
	.when('/websites', {
		templateUrl : 'app/components/websites/websites.html',
		controller  : 'websitesController'
	})
	.when('/interests', {
		templateUrl : 'app/components/interests/interests.html',
		controller  : 'interestsController'
	})
	.when('/images', {
		templateUrl : 'app/components/images/images.html',
		controller  : 'imagesController'
	})
	.when('/contact', {
		templateUrl : 'app/components/contact/contact.html',
		controller  : 'contactController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
