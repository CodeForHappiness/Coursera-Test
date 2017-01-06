(function(){
  'use strict';

   var x = angular.module("CustomFilterApp",[]);
   x.controller("CustFilterController",CustFilterController)
    .filter("loves",customLoveFilter);

    CustFilterController.$inject = ['$scope','lovesFilter'];

    function CustFilterController($scope,lovesFilter){
      $scope.sayMessage = function (){
        var msg = "Appu likes to eat Buffalo Wild Wings";
        msg = lovesFilter(msg);
        return msg;
      };
    }

function customLoveFilter(){
     return function(input){
       input = input || "";
       input = input.replace("likes","loves");
       return input;
     };
   }
})();
