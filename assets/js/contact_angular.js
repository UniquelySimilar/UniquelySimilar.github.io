var contactApp = angular.module("contactApp", []);

contactApp.controller('ContactController', function($scope, $http) {
	$scope.showDebug = false;
	contactServiceURL = "http://contact-service-timc.herokuapp.com/api/contacts"
//	contactServiceURL = "http://contactservice.localhost/api/contacts"

	$scope.processContact = function() {
		// Simple POST request example (passing data) :
		$http.post(contactServiceURL, $scope.contact).
			success(function(data, status, headers, config) {
				// this callback will be called asynchronously when the response is available
				$scope.status = status;
				$scope.contact = {};
				$scope.success = true;
				$scope.errors = "";
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
			});
	};
});
