// Images controller
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
