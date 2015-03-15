appControllers.controller('HomeController',function($scope,$firebaseAuth,$firebase,$location){

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);

	//var ref2 = new Firebase('https://servicingme.firebaseio.com');

	$scope.users = users.$asObject();
	$scope.showLoginModal = false;
	$scope.showRegisterModal = false;

	$scope.addUser=function(registerUser){
		users.$push({
			name:registerUser.name,
			date: Firebase.ServerValue.TIMESTAMP

		})
	}

	$scope.deleteUser = function(key){
		meetings.$remove(key);
	}

});