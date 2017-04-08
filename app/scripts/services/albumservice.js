'use strict';

/**
 * @ngdoc service
 * @name tddApp.albumService
 * @description
 * # albumService
 * Service in the tddApp.
 */
angular.module('tddApp')
  .service('albumService', ['$http',
   function ($http) {

     // Call with any URL (returns promise)
     this.callAPI = function(URL){
       return $http.get(URL);
     };

  }]);
