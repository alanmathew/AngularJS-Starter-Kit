var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'partials/home.html',
    controller  : 'HomeController'
  })
  .when('/page1', {
    templateUrl : 'partials/page1.html',
    controller  : 'page1Cntrl'
  })
  .when('/page2', {
    templateUrl : 'partials/page2.html',
    controller  : 'page2Cntrl'
  })
  .when('/page3', {
    templateUrl : 'partials/page3.html',
    controller  : 'page3Cntrl'
  })
  .otherwise({redirectTo: '/'});
});
