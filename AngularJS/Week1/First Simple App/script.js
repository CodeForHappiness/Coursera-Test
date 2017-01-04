(function(){
  'use strict';

  angular.module('MyFirstApp',[])
         .controller('MyFirstController',function($scope){
            $scope.name = "Appu";
            $scope.sayHello = function(){
              return "Hello Coursera!";
            };
         });
})();
