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

    // beforeEach(inject(function () {
    //   scope.hideImage();
    // }));

    it('Sets the value of \'showImage\' to TRUE', function(){
      scope.hideImage();
      expect(scope.showImage).toBeTruthy();
    });

    it('sets the value of \'buttonText\' variable', function(){
      scope.hideImage();
      expect(scope.buttonText).toBe('Hide');
    });

    it('sets the value of \'buttonText\' variable', function(){
      scope.hideImage();
      scope.hideImage();
      expect(scope.buttonText).toBe('Show');
    });
  });

  // Sum
  describe('sum', function(){
    it('Function exists and receives 2 arguments as input', function(){
      var result = scope.sum(4,4);
      expect(result).toBeTruthy();
    });

    /*
    it('If input numbers are negative numbers', function(){
      var result = scope.sum(-2,-2);
      expect(result).toBeTruthy();
    });

    it('If input numbers are positive numbers', function(){
      var result = scope.sum(2,2);
      expect(result).toBeTruthy();
    });

    it('If input numbers are positive and negative numbers', function(){
      var result = scope.sum(2,-2);
      expect(result).toBeFalsy();
    });
    */

    it('If function receives 2 identical arguments as input returns TRUE', function(){
      var result = scope.sum(4,4);
      expect(result).toBeTruthy();
    });

    it('If function receives 2 different arguments as input returns FALSE', function(){
      var result = scope.sum(4,8);
      expect(result).toBeFalsy();
    });
  });

  describe('populate', function(){

    beforeEach(inject(function () {
      spyOn(scope, 'format').and.callThrough();
      scope.populate();
    }));

    it('for each item in items-collection, it calls format function', function(){
      // spyOn(scope, 'format').and.callThrough();
      // scope.populate();

      //expect(scope.format).toHaveBeenCalled();

      expect(scope.format).toHaveBeenCalledTimes(scope.items.length);
    });

  });

  describe('format', function(){

    var fake_item = {
      'name': 'fake_name',
      'username' : 'fake_user',
      'email' : 'fake_emial'
    };

    it('functions updates the property \'email\'', function(){
      scope.format(fake_item);
      expect(fake_item.email).toBe('something@gmail.com');
    });

  });

});
