'use strict';

/**
 * @ngdoc function
 * @name f1appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the f1appApp
 */
angular.module('f1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
