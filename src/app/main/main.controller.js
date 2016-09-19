(function() {
  'use strict';

  angular
    .module('testBooks')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(listBookService, $state) {

    var vm = this;
    vm.listBooks = [];
    vm.click = click;

    activate();

    function activate() {
      vm.listBooks = listBookService.getListBook();
    }

    function click(id) {
      $state.go('bookDetail', {id: id});
    }

  }
})();
