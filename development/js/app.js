var sme = angular.module('sme',['ngRoute','firebase','appControllers']);
sme.constant('FIREBASE_URL','https://servicingme.firebaseio.com');

var appControllers = angular.module('appControllers',['firebase','ui.bootstrap','ngCookies']);

sme.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'templates/home.html',
      controller:  'HomeController'
    }).
    when('/services', {
      templateUrl: 'templates/service.html',
      controller:  'ServicesController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);