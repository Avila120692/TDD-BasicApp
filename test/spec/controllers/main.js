'use strict';

describe('Controller: MainCtrl', function () {
  // load the controller's module
  beforeEach(module('tddApp'));
  var MainCtrl,
    scope,
    albumService,
    $q,
    defer,
    promise;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _albumService_, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    albumService = _albumService_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });

    spyOn(albumService, 'callAPI').and.callFake(function(){
      defer = $q.defer();
      return defer.promise;
    });
  }));

  // Initial state of variables
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
    it('Sets the value of \'showImage\' to TRUE', function(){
      // When:
      scope.hideImage();
      // Expect:
      expect(scope.showImage).toBeTruthy();
    });

    it('Sets the value of \'buttonText\' variable', function(){
      scope.hideImage();
      expect(scope.buttonText).toBe('Hide');
    });

    it('Sets the value of \'buttonText\' variable', function(){
      scope.hideImage();
      scope.hideImage();
      expect(scope.buttonText).toBe('Show');
    });
  });

  // Sum
  describe('sum', function(){
    it('Function exists and receives 2 arguments as input', function(){
      //When :
      var result = scope.sum(4,4);
    });

    it('If input numbers are negative numbers', function(){
      var result = scope.sum(-2,-2);
      expect(result).toBeTruthy();
    });

    it('If function receives 2 identical arguments as input returns TRUE', function(){
      var result = scope.sum(4,4);
      expect(result).toBeTruthy();
    });

    it('If function receives 2 different arguments as input returns FALSE', function(){
        var result = scope.sum(4,8);
        expect(result).toBeFalsy();
      });
  });

  // Populate
  describe('populate', function(){
        it('for each item in items-collection, it calls format function', function(){
          spyOn(scope, 'format').and.callThrough();
          scope.populate();
          expect(scope.format).toHaveBeenCalledTimes(scope.items.length);
        });
  });

  // Format
  describe('format', function(){
    // Given :
    var fake_item = {
     'name': 'fake_name',
     'username' : 'fake_user',
     'email' : 'fake_emial'
    };

  beforeEach(inject(function () {
     scope.format(fake_item);
   }));
    it('function updates the property \'email\'', function(){
      // Expect :
      expect(fake_item.email).toBe('something@gmail.com');
    });
    it('function updates the property \'name\'', function(){
       // Expect :
       expect(fake_item.name).toBe('Miguel');
     });
  });

  /*********************** CHALLENGE STARTS HERE ***************************/
  // CHALLENGE !
  // TODO: Understand this
  describe('getAlbumsData on SUCCESS', function(){
    var dummyResponse = {
      data:
        [
          {
            "albumId": 1,
            "id": 5,
            "title": "Title 1",
            "url": "someURL",
            "thumbnailUrl": "some thumbnail"
          },
          {
            "albumId": 2,
            "id": 9,
            "title": "Title 2",
            "url": "some other URL",
            "thumbnailUrl": "some other thumbnail"
          }
        ]
    };

    beforeEach(function () {
      scope.getAlbumsData();
      defer.resolve(dummyResponse); // THIS IS A KEY POINT!
      scope.$apply();
    });

    it('should successfully resolve promise with response data', function(){
      var item = scope.albumsData[0];

      // Expect scope.albumsData were resolved with dummyData:

      // Dummy Item 1
      console.debug("Item 1:");
      console.debug(item);
      expect(item.albumId).toBe(1);
      expect(item.id).toBe(5);
      expect(item.title).toBe("Title 1");
      expect(item.url).toBe("someURL");
      expect(item.thumbnailUrl).toBe("some thumbnail");

      // Dummy Item 2
      var item_2 = scope.albumsData[1];
      console.debug("Item 2:");
      console.debug(item_2);
      // TODO:
    });
  });

  // CHALLENGE !
  // TODO: Manage rejected promise!
  describe('getAlbumsData on ERROR', function(){
    beforeEach(function () {
      scope.getAlbumsData();
      // TODO: Manage promise on ERROR
      // scope.$apply(); // Remember this a very necessary step (Reference: )
    });

      it('should reject promise', function(){
        // TODO : Write your assertions here
      });
  });
  /*********************** CHALLENGE ENDS HERE *****************************/
});
