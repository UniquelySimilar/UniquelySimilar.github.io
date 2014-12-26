// create the application module
var devInfoApp = angular.module('devInfoApp', ['ngRoute']);

// configure the routes
devInfoApp.config( function($routeProvider) {
	$routeProvider

	// route for the 'about' page
	.when('/', {
		templateUrl : 'views/about.html',
		controller  : 'AboutController'
	})

	// route for the 'skillset' page
	.when('/skillset', {
		templateUrl : 'views/skillset.html',
		controller  : 'SkillsetController'
	})

	// route for the 'demoapps' page
	.when('/demoapps', {
		templateUrl : 'views/demoapps.html',
		controller  : 'DemoappsController'
	});
});

// create the controller and inject Angular's $scope
devInfoApp.controller('AboutController', function($scope) {
});

devInfoApp.controller('SkillsetController', function($scope) {
});

devInfoApp.controller('DemoappsController', function($scope) {
});