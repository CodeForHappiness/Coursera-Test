(function(){
  'use script';

  var app = angular.module('WatcherApp',[]);
  app.controller('WatcherController',WatcherController);

  WatcherController.$inject =['$scope'];
  function WatcherController($scope){
    $scope.val = 0;
    $scope.numWatchers = function(){
      console.log("Number of Watchers : ",$scope.$$watchersCount);
    };

    $scope.incrVal = function() {
      $scope.val++;
    };

    $scope.$watch('val',function(newValue,oldValue){
      console.log("OldValue : ",oldValue);
      console.log("NewValue : ",newValue);
    });
  }
})();
