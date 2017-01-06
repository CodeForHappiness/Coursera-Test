(function(){
  'use strict';
  var app=angular.module("Minification",[]);
  app.controller("MinController",MinController);

    MinController.$inject=['$scope','$filter'];
    function MinController($scope,$filter){
    $scope.name = "Aparajitha";

    $scope.upper=function() {
      var x=$filter('uppercase');
      $scope.name = x($scope.name);

    };
}
})();
