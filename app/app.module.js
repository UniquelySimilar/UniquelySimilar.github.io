// create the application module
var devInfoApp = angular.module('devInfoApp', ['ngRoute']);

// configure the routes
devInfoApp.config( function($routeProvider) {
	$routeProvider

	.when('/about', {
		templateUrl : '../pages/views/about.html',
		controller  : 'aboutController'
	})
	.when('/skillset', {
		templateUrl : '../pages/views/skillset.html',
		controller  : 'skillsetController'
	})
	.when('/demoapps', {
		templateUrl : '../pages/views/demo_apps.html',
		controller  : 'demoAppsController'
	})
	.when('/interests', {
		templateUrl : '../pages/views/interests.html',
		controller  : 'interestsController'
	})
	.when('/contact', {
		templateUrl : '../pages/views/contact.html',
		controller  : 'contactController'
	})
	.otherwise({
		redirectTo  : '/about'
	});
});

// create the controllers and inject Angular's $scope
devInfoApp.controller('aboutController', ['$scope', function($scope) {
}]);

devInfoApp.controller('skillsetController', ['$scope', function($scope) {
}]);

devInfoApp.controller('demoAppsController', ['$scope', function($scope) {
}]);

devInfoApp.controller('interestsController', ['$scope', function($scope) {
}]);

devInfoApp.controller('contactController', ['$scope', function($scope) {
}]);
