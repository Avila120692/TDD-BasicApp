'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
.controller('MainCtrl',
  ['$scope', 'albumService',
    function ($scope, albumService) {
      // Init $scope variables
      $scope.buttonText = 'Show';
      $scope.showImage = false;
      $scope.items = [];
      $scope.itemsFormatted = false;

      //  Function: Hide image
      $scope.hideImage = function(){
        $scope.showImage = !$scope.showImage;

        if($scope.showImage){
          $scope.buttonText = 'Hide';
        }
        else{
          $scope.buttonText = 'Show';
        }
      }

      // Write a function that :
      // - Receives 2 integer numbers : a and b
      // - Return a boolean value
      // - Return true if : a-b = 0
      // - Return false if : a-b != 0
      $scope.sum = function(a,b){
        return a == b;
      }

      // Foreach, Called, Called times ()
      $scope.populate = function() {
        // Items
        $scope.items = [
            {
              'name' : 'John Smith',
              'username':'johnsmith',
              'email' : 'jsmith@gmail.com'
            },
            {
              'name' : 'Alice Crane',
              'username':'alicecrane',
              'email' : 'acrane@gmail.com'
            },
            {
              'name' : 'Susan Doe',
              'username':'susandoe',
              'email' : 'sdoe@gmail.com'
            }
          ];

        // Call format function
        $scope.items.forEach(function(item){
          $scope.format(item);
        });
      }

      // Format function
      $scope.format = function(item){
        item.email = 'something@gmail.com';
        item.name = 'Miguel';
      };

      /*********************** CHALLENGE STARTS HERE ***************************/
      // Variable to store albums DATA
      $scope.albumsData = [];

      // Function to retrieve photos DATA
      $scope.getAlbumsData = function(){
        // Declare URL
        var albumsURL = 'https://jsonplaceholder.typicode.com/photos';

        // Invoke function making a http request
        albumService.callAPI(albumsURL)
          .then(function(response){
            // Manage response on SUCCESS
            $scope.albumsData = response.data;
            console.log('Success');
          },function error (response){
            // Manage response on ERROR
            console.error('Error', response.status, response.data);
        });
      };
      /*********************** CHALLENGE ENDS HERE *****************************/
  }]);
