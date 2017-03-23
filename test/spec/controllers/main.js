'use strict';

describe('Controller: MainCtrl', function () {
  // load the controller's module
  beforeEach(module('tddApp'));
  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // Variables
  describe('Initial Values', function(){
    it('Check initial value of \'showImage\' flag', function(){
      expect(scope.showImage).toBeFalsy();
    });

    it('Check initial value of \'buttonText\' variable', function(){
      expect(scope.buttonText).toBe('Show');
    });
  });

  // Image
  describe('hideImage', function(){

  });

  // Sum
  describe('sum', function(){

  });

  // Populate
  describe('populate', function(){

  });

  // Format
  describe('format', function(){

    
  });
});
