'use strict';

/**
 * @ngdoc function
 * @name tddApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tddApp
 */
angular.module('tddApp')
.controller('MainCtrl', ['$scope',
  function ($scope) {
    // Init $scope variables
    $scope.buttonText = 'Show';
    $scope.showImage = false;
    $scope.items = [];
    $scope.itemsFormatted = false;

    // Function: hideImage()
    $scope.hideImage = function(){
      $scope.showImage = !$scope.showImage;

      // Update button text
      if($scope.showImage)
        $scope.buttonText = 'Hide';
      else {
        $scope.buttonText = 'Show';
      }
    }


    // Write a function that :
    // - Receives 2 integer numbers : a and b
    // - Return a boolean value
    // - Return true if : a-b = 0
    // - Return false if : a-b != 0

    // Function : sum()
    $scope.sum = function(a,b){

      // 1)
      // var result = a - b;
      // if(a === b)
      //   return true;
      // else {
      //   return false;
      // }

      // 2)
      // return result === 0;

      // 3)
      //return true;

      // 4)
      return a === b;
    }



    // Foreach, Called, Called times ()
    $scope.populate = function() {

      $scope.items = [
        {
          'name' : 'Orange',
          'username':'Apple',
          'email' : 'Banana'
        },
        {
          'name' : 'Orange',
          'username':'Apple',
          'email' : 'Banana'
        },
        {
          'name' : 'Orange',
          'username':'Apple',
          'email' : 'Banana'
        }
      ];

      $scope.items.forEach(function(item){
        //item.email = "something@gmail.com";

        $scope.format(item);
      });

      // $scope.format($scope.items);

    }

    $scope.format = function(item){
      item.email = "something@gmail.com";
    };


    // Results or behavior?
    // return resulting value of method call()
    // callFake()


  }]);
