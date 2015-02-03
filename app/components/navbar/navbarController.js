devInfoApp.controller('navbarController', ['$scope', function($scope) {
	// Menu option constants used as index for menu option status array
	$scope.ABOUT_OPT = 0;
	$scope.SKILLSET_OPT = 1;
	$scope.DEMOAPPS_OPT = 2;
	$scope.INTERESTS_OPT = 3;
	$scope.MISC_UI_OPT = 4;
	$scope.IMAGES_OPT = 5;
	$scope.CONTACT_OPT = 6;

	// Menu option status array
	$scope.menuOptStatus = [
		false,
		false,
		false,
		false,
		false,
		false,
		false
	];

	$scope.isCurrentOption = function(selectedOption) {
		return $scope.menuOptStatus[selectedOption];
	};

	$scope.menuClicked = function(selectedOption) {
		console.log("Menu option clicked");
		
		// Set all array item status' to false
		for (i = 0; i < $scope.menuOptStatus.length; i++) {
			$scope.menuOptStatus[i] = false;
		}

		// Set the selected menu option status to true
		$scope.menuOptStatus[selectedOption] = true;
	};
}]);
