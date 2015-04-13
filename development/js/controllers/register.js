appControllers.controller('registerController',function($scope,$firebaseAuth,$firebase,$location,$rootScope) {

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);
	var ref2 = new Firebase('https://servicingme.firebaseio.com');
	var authObj = $firebaseAuth(ref2);

	$scope.users = users.$asObject();
	$scope.showRegisterModal = false;
	$scope.errorMsg='';

	$scope.toggleRegisterModal = function(){
        $scope.showRegisterModal = !$scope.showRegisterModal;
    };

    $scope.registerUser = function(newUser){
    	$rootScope.username = newUser.username;
    	authObj.$createUser({
    	username: newUser.username,
  		email: newUser.email,
  		password: newUser.password
		}).then(function(userData) {
  			console.log("User " + userData.uid + " created successfully!");
  			$location.path('/services');
  		}).catch(function(error) {
  		console.error("Error: ", error.message);
  		$scope.errorMsg = error.message;
		});
	}
});
