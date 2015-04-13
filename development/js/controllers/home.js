appControllers.controller('HomeController',function($scope,$firebaseAuth,$firebase,$location,$cookieStore,$rootScope){

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);
	$scope.loginAs = $cookieStore.get('loginAs');
	if($scope.loginAs != 'undefined'){
		/*$location.path('/services');*/
	}
	//var ref2 = new Firebase('https://servicingme.firebaseio.com');

	$scope.users = users.$asObject();
	$scope.showLoginModal = false;
	$scope.showRegisterModal = false;

	$scope.hideNav = true;

	/*$scope.addUser=function(registerUser){
		users.$push({
			name:registerUser.name,
			date: Firebase.ServerValue.TIMESTAMP

		})
	}*/

	/*$scope.deleteUser = function(key){
		meetings.$remove(key);
	}
*/
});