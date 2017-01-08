(function () {
  'use script';

  var shoppingList1 = ["Parmesan Garlic","Thai Curry","Honey BBQ","Spicy Garlic","Wild","Hot"];

  var shoppingList2 = [
    {
      name:"Appu",
      quantity:"5"
    },
    {
      name:"Nishi",
      quantity:"10"
    },
    {
      name:"Kate",
      quantity:"7"
    },
    {
      name:"John",
      quantity:"100"
    },
    {
      name:"Casper",
      quantity:"200"
    }];


  var app = angular.module('NgrepeatApp',[]);
  app.controller('NgrepeatController',NgrepeatController);

  NgrepeatController.$inject=["$scope"];
  function NgrepeatController($scope){
    $scope.shoppingList1 = shoppingList1 ;
    $scope.shoppingList2 =  shoppingList2;

    $scope.addItemToList = function () {
      var newItem = {
        name : $scope.newItemName,
        quantity : $scope.newItemQuantity
      };
      $scope.shoppingList2.push(newItem);
    }
  }
}) ();
