(function(){
  'use strict';

  var app=angular.module("WatcherApp",[]);
  app.controller("WatcherController",WatcherController);
  //console.log($scope);

  WatcherController.$inject = ['$scope'];

  function WatcherController($scope){
    $scope.value = 0;


    $scope.incValue = function () {
      $scope.value++;
    };

    $scope.numWatchers = function () {
      console.log("Watchers count",$scope.$$watchersCount);
    };

    $scope.$watch(function () {
      console.log("Digest Loop Fired!");
    })
  }
})();
