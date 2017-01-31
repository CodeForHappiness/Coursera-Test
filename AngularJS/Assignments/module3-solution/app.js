(function () {
  'use strict';

  angular.module("NarrowItDownApp",[])
         .controller("NarrowItDownController",NarrowItDownController)
         .service("MenuSearchService",MenuSearchService)
         .directive("foundItems",FoundItems);

  function FoundItems () {
    var ddo = {
      templateUrl : 'sample.html',
      scope : {
        // foundItems : '<',
        items : '<',
        onRemove : '&'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.getFilteredItems = function () {

      if(menu.searchTerm === "" || menu.searchTerm === undefined)
      {
        menu.categories = [];
      }
      else {
        var promise = MenuSearchService.getMenuCategories(menu.searchTerm);

        promise.then(function(response){
          var temp = response.data.menu_items;
          menu.categories = [];
          for(var index = 0; index < temp.length ; index++){
            var des = temp[index].description.toLowerCase();
            var sec = menu.searchTerm.toLowerCase();
            if(des.indexOf(sec) !== -1){
               menu.categories.push(temp[index]);
            }
          }
          if (menu.categories.length == 0){
            console.log("Data not found");
          }
          }).catch(function(error){
            console.log("Data not found");
          });
        }
      };

      menu.removeFromList = function (itemIndex) {
        menu.categories.splice(itemIndex,1);
      };

  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService ($http) {
    var service = this;

    service.getMenuCategories =  function(narrowWord){
      var response = $http({
        method : "GET",
        url : "http://davids-restaurant.herokuapp.com/menu_items.json",
      });
      return response;
    };


  }

})();
