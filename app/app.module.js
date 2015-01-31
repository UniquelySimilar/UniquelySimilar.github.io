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
	.when('/images', {
		templateUrl : '../pages/views/images.html',
		controller  : 'imagesController'
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

devInfoApp.controller('imagesController', ['$scope', function($scope) {
	// Add/remove images processing
	$scope.image_count = 1;
	$scope.image_numbers = [];

	$scope.addImage = function() {
		//console.log("imagesController 'addImage()' called.");
		$scope.image_numbers.push($scope.image_count++);
	};

	$scope.removeImage = function(number) {
		//console.log("imagesController 'removeImage()' called with number " + number);
		// Remove the associated object from the image array
		var i = $scope.image_numbers.indexOf(number);
		if(i != -1) {
			$scope.image_numbers.splice(i, 1);
		}
	};

	$scope.resetPage = function() {
		//console.log("imagesController 'resetPage()' called.");
		while($scope.image_numbers.length > 0) {
			$scope.image_numbers.pop();
		}

		$scope.image_count = 1;
	};
}]);

devInfoApp.controller('contactController', [ '$scope', '$http', '$timeout', function($scope, $http, $timeout) {

	$scope.showDebug = false;
	contactServiceURL = "http://contact-service-timc.herokuapp.com/api/contacts"
//	contactServiceURL = "http://contactservice.localhost/api/contacts"

	$scope.processContact = function() {
		$scope.inProcess = true;

		// Simple POST request example (passing data) :
		$http.post(contactServiceURL, $scope.contact).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously when the response is available
			$scope.status = status;
			$scope.success = true;
			$scope.newContactName = $scope.contact.name;
			//console.log("New contact name: " + $scope.newContactName);
			$scope.contact = null;
			$scope.errors = null;

			$scope.inProcess = false;
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs or server returns response with an error status.
			$scope.status = status;
			$scope.success = false;
			$scope.errors = data['errors'];
			if ($scope.errors.hasOwnProperty('exception')) {
				console.log("ERROR: 'exception' property found in response, indicating server caught and returned an exception.");
				console.log("Exception message: " + $scope.errors.exception);
			}

			$scope.inProcess = false;
		});
	};

}]);
