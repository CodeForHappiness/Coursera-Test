(function(){
  'use strict';

  var app = angular.module('LunchCheck',[]);
  app.controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.arr="";
    $scope.msg="";

    $scope.msgDisplay = function(){

      if ($scope.arr === "")
      {
        $scope.msg =  "Please enter the text!";
        return;
      }

      var temp = $scope.arr.split(',');
      console.log(temp);

      if(temp.length <=3){
        $scope.msg = 'Enjoy!';
      }
      else{
        $scope.msg = "Too much!";
      }
    };
  }
})();
