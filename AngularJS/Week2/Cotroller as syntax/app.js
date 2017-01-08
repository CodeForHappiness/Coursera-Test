(function () {
  'use strict';

  var app = angular.module('ControllerApp',[]);
  app.controller('ParentController',ParentController)
     .controller('ChildController',ChildController);

  ParentController.$inject = ['$scope'];
  function ParentController ($scope) {
    var parent = this;
    parent.value = 5;
  }

  ChildController.$inject = ['$scope'];
  function ChildController ($scope) {
    var child = this;
    child.value = 10;
  }
}) ();
