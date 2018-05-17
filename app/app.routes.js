// Routing
devInfoApp.config( function($routeProvider) {
	$routeProvider
	.when('/about', {
		templateUrl : 'app/components/about/about.html',
		controller  : 'aboutController'
	})
	.when('/skillset', {
		templateUrl : 'app/components/skillset/skillset-flexbox.html',
		controller  : 'skillsetController'
	})
	.when('/websites', {
		templateUrl : 'app/components/websites/websites.html',
		controller  : 'websitesController'
	})
	.when('/resume', {
		templateUrl : 'app/components/resume/resume.html',
		controller  : 'resumeController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});
