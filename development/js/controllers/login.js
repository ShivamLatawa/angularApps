appControllers.controller('loginController',function($scope,$firebaseAuth,$firebase,Authentication,$location,$cookieStore,$rootScope) {

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);
	var ref2 = new Firebase('https://servicingme.firebaseio.com');

	$scope.users = users.$asObject();
	$scope.showLoginModal = false;
  $scope.errorMsg=false;

	$scope.toggleLoginModal = function(){
        $scope.showLoginModal = !$scope.showLoginModal;
    };

    $scope.login = function(user) {
      Authentication.login(user)
        .then(function(user) {
          $cookieStore.put('username', user.password.email);
          /*$rootScope.username = user.password.email;*/
          $location.path('/services');
        }, function(error) {
          $scope.message = error.toString();
          $scope.errorMsg=true;
        });
    }; //login
});