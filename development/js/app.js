var sme = angular.module('sme',['ngRoute','firebase','appControllers']);
sme.constant('FIREBASE_URL','https://servicingme.firebaseio.com');

var appControllers = angular.module('appControllers',['firebase','ui.bootstrap']);

sme.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'templates/home.html',
      controller:  'HomeController'
    }).
    when('/services', {
      templateUrl: 'templates/service.html',
      controller:  ''
    }).
    when('/basicInfo', {
      templateUrl: 'templates/basicInfo.html',
      controller:  ''
    }).
    when('/schedule', {
      templateUrl: 'templates/schedule.html',
      controller:  ''
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);