'use strict';

describe('Controller: IndividualcircuitCtrl', function () {

  // load the controller's module
  beforeEach(module('f1appApp'));

  var IndividualcircuitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndividualcircuitCtrl = $controller('IndividualcircuitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
