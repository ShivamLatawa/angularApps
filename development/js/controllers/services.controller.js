appControllers.controller('ServicesController',function($scope,$rootScope,$cookieStore){

	console.log('name:',$rootScope.username);
	$scope.username = $cookieStore.get('username');
	$scope.basicInfoView = true;
	$scope.servicesView = false;
	$scope.scheduleView = false;

	$scope.displayBasicInfo = function(){
		$scope.basicInfoView = true;
		$scope.servicesView = false;
		$scope.scheduleView = false;
	}

	$scope.displayServices = function(){
		$scope.basicInfoView = false;
		$scope.servicesView = true;
		$scope.scheduleView = false;
	}

	$scope.displaySchedule = function(){
		$scope.basicInfoView = false;
		$scope.servicesView = false;
		$scope.scheduleView = true;
	}

	$scope.addClass = function(){
		$scope.activeClass = true;
	}

    $scope.rowCollection = [
        {name: 'Latawa', address: 'Anandpur Sahib', city: 'Ropar', services: 'Fridge, Fan', contact: '+91-8800900134'},
        {name: 'Latawa', address: 'Anandpur Sahib', city: 'Ropar', services: 'Fridge, Fan', contact: '+91-8800900134'},
        {name: 'Latawa', address: 'Anandpur Sahib', city: 'Ropar', services: 'Fridge, Fan', contact: '+91-8800900134'}
    ];
})