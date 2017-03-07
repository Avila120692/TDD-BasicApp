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
    $scope.layoutState = 'initial';
    $scope.showImage = false;

    // Write a function that :
    // - Receives 2 integer numbers : a and b
    // - Return a boolean value

    // Function : sum()
    $scope.sum = function(a,b){
    }

    // Function: hideImage()
    $scope.hideImage = function(){
      $scope.showImage = !$scope.showImage;
      $scope.layoutState = 'altered';
    }

    // Foreach, Called, Called times ()


    // Promise resolution



    // Results or behavior?
    // return resulting value of method call()
    // callFake()


  }]);
