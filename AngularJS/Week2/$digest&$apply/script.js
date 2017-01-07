(function(){
  'use strict';

  var app = angular.module('App',[]);
  app.controller('Controller',Controller);

  Controller.$inject=['$scope','$timeout'];

  function Controller ($scope,$timeout) {
    $scope.value = 0;

    $scope.incVal = function () {
      $timeout(function(){
        $scope.value++;
        console.log("Value Incremented");
      },2000);
    };

    // $scope.incVal = function () {
    //   setTimeout(function(){
    //     $scope.$apply(function(){
    //       $scope.value++;
    //       console.log("Value Incremeneted");
    //     });
    //   },2000);
    // };

    // $scope.incVal = function () {
    //   setTimeout(function(){
    //     $scope.value++;
    //     console.log("Counter incremented");
    //     $scope.$digest();//To call the watcher explicitly
    //   },2000);
    //
    // };
  }
})();
