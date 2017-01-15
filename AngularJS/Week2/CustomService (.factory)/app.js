(function () {
  'use strict';

  angular.module("FactoryApp",[])
         .controller("FactoryController1",FactoryController1)
         .controller("FactoryController2",FactoryController2)
         .factory("ShoppingListFactory",ShoppingListFactory);

  FactoryController1.$inject = ['ShoppingListFactory'];
  function FactoryController1(ShoppingListFactory){
    var list1 = this;
    list1.itemName = "";
    list1.itemQuantity = "" ;
      var service = ShoppingListFactory();
      list1.addItem = function () {
        service.addItem(list1.itemName,list1.itemQuantity);
      };
      list1.items = service.getItems ();
  }

  FactoryController2.$inject = ['ShoppingListFactory'];
    function FactoryController2(ShoppingListFactory){
      var list2 = this;
      list2.itemName = "";
      list2.itemQuantity = "";
      var service = ShoppingListFactory(3);
      list2.addItem = function () {
          service.addItem(list2.itemName,list2.itemQuantity);
    };
      list2.items = service.getItems();
  }

    function ShoppingListService (maxItems) {
      var service = this;
      var items = [];
      service.addItem = function (name,quantity) {
        if (maxItems == undefined || ((maxItems != undefined) && (items.length < maxItems))){
          var item = {
            name : name,
            quantity : quantity
          };
          items.push(item);
        };
      }

      service.getItems = function () {
        return items;
      };
    }

    function ShoppingListFactory () {
      var service = function (maxCount) {
        return new ShoppingListService(maxCount);
      }
      return service;
    }
}) ();
