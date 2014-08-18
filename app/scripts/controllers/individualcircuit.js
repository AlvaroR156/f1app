'use strict';

/**
 * @ngdoc function
 * @name f1appApp.controller:IndividualcircuitCtrl
 * @description
 * # IndividualcircuitCtrl
 * Controller of the f1appApp
 */
angular.module('f1App')
  .controller('IndividualcircuitCtrl', function ($scope, $routeParams, ergastAPIservice) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'google-maps'
    ];
    $scope.id = $routeParams.id;
    $scope.circuit = [];
    $scope.map = [];
    ergastAPIservice.getCircuits($scope.id).success(function(response) {
        $scope.circuit = response.MRData.CircuitTable.Circuits[$scope.id];
        console.log($scope.circuit);
        console.log('Lat: ' + $scope.circuit.Location.lat);
        var $latitude = $scope.circuit.Location.lat;
        var $longitude = $scope.circuit.Location.long;
        console.log('Lat2: ' + $longitude);
        $scope.map = {
            center: {
                latitude: $latitude,
                longitude: $longitude
            },
            zoom: 9
        };
        console.log('map: ' + $scope.map.center.latitude);
    });
        //don't understand why I have to leave this here, maybe call? or initiate?
        $scope.map = {
            center: {
                latitude: 4522222,
                longitude: -722223
            },
            zoom: 8
        };
  });

//angular.module('f1App', ['google-maps']);

