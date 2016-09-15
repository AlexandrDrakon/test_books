(function() {
  'use strict';

  angular
    .module('testBooks')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(request) {
    var vm = this;

    vm.listBooks = [];

    vm.click = click;

    activate();

    function activate() {
      getListBooks();
    }

    function click(id) {
      console.log('click');
    };

    function getListBooks() {
      request.listBooks.query({}, function(data) {
        vm.listBooks = data;
      });
    }
  }
})();
