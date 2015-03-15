appControllers.controller('registerController',function($scope,$firebaseAuth,$firebase,$location) {

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);
	var ref2 = new Firebase('https://servicingme.firebaseio.com');

	$scope.users = users.$asObject();
	$scope.showRegisterModal = false;

	$scope.toggleRegisterModal = function(){
        $scope.showRegisterModal = !$scope.showRegisterModal;
    };
});

