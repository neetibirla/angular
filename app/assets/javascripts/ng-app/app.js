angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            }).when('/test', {
                templateUrl: 'test.html',
                controller: 'TestCtrl'
            });
        $locationProvider.html5Mode(true);
    });