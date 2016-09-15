(function() {
  'use strict';

  angular
    .module('testBooks')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
