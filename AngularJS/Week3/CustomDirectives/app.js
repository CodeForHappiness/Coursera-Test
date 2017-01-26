(function () {
  'use strict';

  angular.module("FactoryApp",[])
         .controller("FactoryController1",FactoryController1)
         .controller("FactoryController2",FactoryController2)
         .factory("ShoppingListFactory",ShoppingListFactory)
         .directive("watchItem",WatchItemDirective)
         .directive("listItem",ListItemDirective);

  function WatchItemDirective(){
    var ddo = {
      template : '{{item.name}} of {{item.quantity}}'
    };
    return ddo;
  }

  function ListItemDirective () {
    var ddo = {
      templateUrl : 'custom.html'
    };
    return ddo;
  }

  FactoryController1.$inject = ['ShoppingListFactory'];
  function FactoryController1(ShoppingListFactory){
    var list = this;
    list.itemName = "";
    list.itemQuantity = "" ;
      var service = ShoppingListFactory();
      list.addItem = function () {
        service.addItem(list.itemName,list.itemQuantity);
      };
      list.items = service.getItems ();
  }

  FactoryController2.$inject = ['ShoppingListFactory'];
    function FactoryController2(ShoppingListFactory){
      var list = this;
      list.itemName = "";
      list.itemQuantity = "";
      var service = ShoppingListFactory(3);
      list.addItem = function () {
          service.addItem(list.itemName,list.itemQuantity);
    };
      list.items = service.getItems();
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
