(function(){
  'use strict';
  var app = angular.module('ExpAInter',[]);
  app.controller('Working',Working);

  Working.$inject = ['$scope'];
  function Working($scope){
    $scope.stateOfFood="hungry";
    $scope.feedYaakov = function (){
      $scope.stateOfFood = 'fed';
    }
  }
})();
