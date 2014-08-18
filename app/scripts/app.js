'use strict';

/**
 * @ngdoc overview
 * @name f1appApp
 * @description
 * # f1appApp
 *
 * Main module of the application.
 */
angular
  .module('f1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'f1App.services',
    'f1App.controllers',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/individualCircuit', {
        templateUrl: 'views/individualcircuit.html',
        controller: 'IndividualcircuitCtrl'
      })
        .when('/individualCircuit/:id', {
            templateUrl: 'views/individualcircuit.html',
            controller: 'IndividualcircuitCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
