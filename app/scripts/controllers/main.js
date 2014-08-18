'use strict';

/**
 * @ngdoc function
 * @name f1appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the f1appApp
 */
angular.module('f1App')
  .controller('MainCtrl', function ($scope) {
    $scope.formula1 = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.individualCircuit = function (circuit) {
          $scope.individualCircuit = circuit;
      };
  });


angular.module('f1App.services', [])
    .factory('ergastAPIservice', function($http) {

        var ergastAPI = {};

        ergastAPI.getCircuits = function () {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2014/circuits.json?callback=JSON_CALLBACK'
            });
        };
        return ergastAPI;
    });
//Circuits Controller
angular.module('f1App.controllers',[])
    .controller('circuitsController', function($scope, ergastAPIservice){
        $scope.nameFilter = null;
        $scope.circuitList = [];

        ergastAPIservice.getCircuits().success(function (response) {
            $scope.circuitList = response.MRData.CircuitTable.Circuits;
        });
    });


