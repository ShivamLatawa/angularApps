appControllers.controller('loginController',function($scope,$firebaseAuth,$firebase,Authentication,$location) {

	var ref = new Firebase('https://servicingme.firebaseio.com/meetings');
	var users = $firebase(ref);
	var ref2 = new Firebase('https://servicingme.firebaseio.com');

	$scope.users = users.$asObject();
	$scope.showLoginModal = false;

	$scope.toggleLoginModal = function(){
        $scope.showLoginModal = !$scope.showLoginModal;
    };

    $scope.login = function() {
      Authentication.login($scope.user)
        .then(function(user) {
          $location.path('/meetings');
        }, function(error) {
          $scope.message = error.toString();
        });
    }; //login
});