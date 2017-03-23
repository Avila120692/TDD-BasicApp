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


    //  TODO: Function: Hide image


    // Write a function that :
    // - Receives 2 integer numbers : a and b
    // - Return a boolean value
    // - Return true if : a-b = 0
    // - Return false if : a-b != 0


    // Foreach, Called, Called times ()
    $scope.populate = function() {
      // TODO: items =

      // TODO: Format function
    }

    $scope.format = function(item){
      // TODO:
    };

  }]);
