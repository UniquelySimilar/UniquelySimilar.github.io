// Contact controller
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
