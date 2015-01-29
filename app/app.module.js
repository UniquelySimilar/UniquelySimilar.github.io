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
	.when('/addremoveimages', {
		templateUrl : '../pages/views/add_remove_images.html',
		controller  : 'addRemoveImagesController'
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

devInfoApp.controller('addRemoveImagesController', ['$scope', '$http', function($scope, $http) {
	// Add/remove images processing
	$scope.img_count = 1;
	$scope.image_html = "<p>Uninitialized image HTML</p>";
	$scope.images = [];

	$http.get('../pages/views/image_container.html').
	success(function(data, status) {
		$scope.image_html = data;
		//console.log($scope.image_html);
	}).
	error(function(data, status) {
		console.error("addRemoveImagesController '$http.get()' failed.")
	});

	$scope.addImage = function() {
		console.log("addRemoveImagesController 'addImage()' called.");
//		$scope.images.push($scope.image_html);
	};

	$scope.resetPage = function() {
		console.log("addRemoveImagesController 'resetPage()' called.");
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

// Bind 'Add' button on 'Add/Remove Images' page
function bindAddButtonClick() {
	$( '#add-image' ).click( function() {
		var btn_id = "btn-" + img_count;
		$('#images-div').append(image_html)
		.find('button').last().attr('id', btn_id);

		$('#images-div').find('.image-title').last().text('Image ' + img_count);

		$("#" + btn_id).click( function() {
			$(this).parent().parent().remove();
		});
		img_count++;
	});	
}

// Bind 'Reset' button on 'Add/Remove Images' page
function bindResetButtonClick() {
	$( '#reset-page' ).click( function() {
		$('#images-div').empty();
		img_count = 1;
	});
}
