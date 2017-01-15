(function () {
  'use strict';

  angular.module('ProviderApp',[])
         .controller('ProviderController',ProviderController)
         .provider('Service',ProviderFunc)
         .config(Config);
Config.$inject = ['ServiceProvider'];
function Config (ServiceProvider) {
  ServiceProvider.defaults.maxCount = 2;
}

  ProviderController.$inject = ['Service'];
  function ProviderController (Service) {
    var provide = this;
    provide.itemName = "";
    provide.itemQuantity = "";

    provide.addItem = function () {
      Service.addItem (provide.itemName,provide.itemQuantity);
    };

    provide.items = Service.getItems();
  }

  function ShoppingListService (maxCount) {
    var service = this;
    var items = [];

    service.addItem = function (name,quantity){
      if ((maxCount == undefined) || ((maxCount != undefined) && (items.length < maxCount))){
        var obj = {
          name : name,
          quantity : quantity
        };
        items.push(obj);
      }
    };

    service.getItems = function () {
      return items;
    };
  }

  function ProviderFunc () {
    var provider = this;
    provider.defaults = {
      maxCount : 10
    };

    provider.$get = function () {
      var shoppingList = new ShoppingListService(provider.defaults.maxCount);
    return shoppingList;
  };
  }


} )();
