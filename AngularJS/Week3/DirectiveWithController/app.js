(function () {
  'use strict';

  angular.module("FactoryApp",[])
         .controller("FactoryController1",FactoryController1)
         .factory("ShoppingListFactory",ShoppingListFactory)
         .directive("shopList",ShoppingList);

  function ShoppingList () {
    var ddo = {
      templateUrl : 'sample.html',
      scope : {
        items : '<',
        title : '@'
      },
      controller : ShoppingListDirectiveController,
      controllerAs : 'listDirective',
      bindToController : true
    };
    return ddo;
  }

  function ShoppingListDirectiveController () {
    var list = this;

    list.isCookieTrue = function () {
      for(var index=0 ; index < list.items.length ; index++){
        if(list.items[index].name.toLowerCase().indexOf("cookies") !== -1){
          return true;
        }
      }
      return false;
    };
  }

  FactoryController1.$inject = ['ShoppingListFactory'];
  function FactoryController1(ShoppingListFactory){
    var list1 = this;
    var short = 'ShoppingList1';

    list1.itemName = "";
    list1.itemQuantity = "" ;

      var service = ShoppingListFactory();
      list1.items = service.getItems ();
      list1.title = short + '('+list1.items.length+'items)';
      list1.addItem = function () {
        service.addItem(list1.itemName,list1.itemQuantity);
        list1.title = short + '('+list1.items.length+'items)';
      };
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
