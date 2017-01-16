(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
         .controller('ToBuyController',ToBuyController)
         .controller('AlreadyBoughtController',AlreadyBoughtController)
         .service('Service',ShoppingListCheckOffService);

  ToBuyController.$inject = ['Service'];
  function ToBuyController (Service) {
    var toBuy = this;

    toBuy.items = Service.getBuy();
    toBuy.bought = function (itemIndex) {
      Service.bought(itemIndex);
    };
  }

  ToBuyController.$inject = ['Service'];
  function AlreadyBoughtController (Service) {
    var bought = this;

    bought.items = Service.getBoughtList();
  }

  function ShoppingListCheckOffService () {
    var service = this;
    service.str = "hello";
    var toBuyList = [
      {  name : "Lays", quantity: 10} ,
      {  name : "Chicken Wings", quantity: 100} ,
      {  name : "Three Cheese Chicken Penne" ,quantity: 1} ,
      {  name : "Veg Nachos",quantity: 3} ,
      {  name : "Chicken Majestic",quantity: 5}
    ];
    var boughtList = [];

    service.bought = function (itemIndex) {
      var obj = {
        name : toBuyList[itemIndex].name,
        quanity : toBuyList[itemIndex].quantity
      };
      boughtList.push(obj);
      toBuyList.splice(itemIndex,1);
    };

    service.getBuy = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

  }
})();
