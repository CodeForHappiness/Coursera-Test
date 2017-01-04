(function(){
  'use strict';

  var app = angular.module('NameCalc',[]);
  app.controller('Calculation',function($scope){
    $scope.name="";
    $scope.totalValue=0;

    $scope.displayValue = function(){
      var totalNum = calculateName($scope.name);
      $scope.totalValue = totalNum;
    };

    function calculateName(string){
      var calculatedVal = 0;
      for(var index=0;index < string.length;index++){
        calculatedVal += string.charCodeAt(index);
      }
      return calculatedVal;
    }
  });
})();
