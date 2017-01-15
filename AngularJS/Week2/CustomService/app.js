(function () {

  'use strict';
  var app = angular.module('CustomServiceController',[]);
  app.controller('AddItem',AddItem)
      .controller('ShowItem',ShowItem)
      .service('service',ShoppingList);

  AddItem.$inject = ['service'];
  function AddItem (service){
    var itemAdder = this ;
    itemAdder.addName = "";
    itemAdder.addQuantity = "";

    itemAdder.addItem = function (){
      service.addNewItem(itemAdder.addName,itemAdder.addQuantity);
    }
  }

  ShowItem.$inject = ['service'];
  function ShowItem (service) {
    var showItem = this;
    showItem.items = service.getItem();
    showItem.remove = function (i){
      service.removeItem(i);
    }
  }

  function ShoppingList () {
    var service = this;
    var items = [];

    service.addNewItem = function(name,quantity) {
      var obj = {
        name : name,
        quantity : quantity
      };
      items.push(obj);
    }

    service.removeItem = function (index){
      items.splice(index,1);
    }

    service.getItem = function(){
      return items;
    }
  }
}) ();
