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

  describe('Initial Values', function(){
    it('Check initial value of \'showImage\' flag', function(){
      expect(scope.showImage).toBeFalsy();
    });

    it('Check initial value of \'layoutState\' variable', function(){
      expect(scope.layoutState).toBe('initial');
    });
  });


  describe('hideImage', function(){

    // it('sets the value of \'showImage\' to TRUE', function(){
      // expect(scope.showImage).toBeFalsy();
    // });

    // it('sets the value of \'showImage\' to TRUE', function(){
    // })

  });




});
