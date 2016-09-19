(function() {
  'use strict';

  angular
    .module('bookDetail')
    .controller('BookDetailController', BookDetailController);

  /** @ngInject */
  function BookDetailController(infoBook, bundlesBook) {

    var vm = this;
    vm.info = {};
    vm.bundles = [];

    activate();

    function activate() {
      vm.info = infoBook;
      vm.bundles = bundlesBook;
    }

  }

})();
