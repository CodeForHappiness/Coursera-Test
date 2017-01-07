(function () {
  'use strict';

  var app = angular.module("OneTimeBindingApp",[]);
  app.controller("OneTimeBindingController",OneTimeBindingController);

  OneTimeBindingController.$inject = ['$scope'];
  function OneTimeBindingController ($scope) {
    $scope.firstName = "Aparajitha";

    $scope.numOfWatchers = function () {
      console.log("Current watchers : ",$scope.$$watchersCount);
    };

    $scope.setFullName = function () {
      $scope.fullName =$scope. firstName+" "+"Rachala";
    };

    $scope.logFirstName = function () {
      console.log("Firstname is :" , $scope.firstName);
    };

    $scope.logFullName = function () {
      console.log("FullName is : ",$scope.fullName);
    };
  }
}) ();
