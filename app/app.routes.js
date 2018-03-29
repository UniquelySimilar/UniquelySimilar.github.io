// Routing
devInfoApp.config( function($routeProvider) {
	$routeProvider

	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.when('/skillset', {
		templateUrl : 'app/components/skillset/skillset-alt.html',
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
	.when('/images', {
		templateUrl : 'app/components/images/images.html',
		controller  : 'imagesController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
