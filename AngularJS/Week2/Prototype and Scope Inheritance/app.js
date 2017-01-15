(function () {
  'use strict';

  var app = angular.module('ControllerApp',[]);
  app.controller('ParentController1',ParentController1)
     .controller('ChildController1',ChildController1);


  ParentController1.$inject = ['$scope'];
  function ParentController1 ($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
    }

    ChildController1.$inject = ['$scope'];
    function ChildController1 ($scope) {
      console.log("CHILD parentValue before changinge: ",$scope.parentValue);
      $scope.parentValue = 5;
      console.log("CHILD parentValue after changing: ",$scope.parentValue);
      console.log("PARENT parentValue after changing: ",$scope.$parent.parentValue);

      console.log("CHILD pc.parentvalue before changing : ",$scope.pc.parentValue);
      $scope.pc.parentValue = 5;
      console.log("CHILD pc.parenValue after changing : ",$scope.pc.parentValue);
      console.log("PARENT pc.parenValue after changing : ",$scope.$parent.pc.parentValue);
    }
})();
