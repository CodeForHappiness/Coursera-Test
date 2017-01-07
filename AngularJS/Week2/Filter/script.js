(function(){
  'use strict';

   var app = angular.module("PriceApp",[]);
   app.controller("PriceController",PriceController);

   PriceController.$inject = [$scope,$filter];
   function PriceController ($scope,$filter) {

     $scope.varMsg = function (){
       var msg =  "Please look below for price by clicking the button";
       var output = $filter('uppercase')(msg);
       return output;
     };

     $scope.priceCheck = function () {
       $scope.price = 45;
       return $scope.price;
     };
   }
})();
