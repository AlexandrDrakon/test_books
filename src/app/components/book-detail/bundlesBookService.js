(function() {
  'use strict';

  angular
    .module('bookDetail')
    .factory('bundlesBookService', bundlesBookService);

  /** ngInject */
  function bundlesBookService($resource, baseUrl, $log) {
    return {
      getBundlesBook: getBundlesBook
    };

    function getBundlesBook(id) {
      return $resource(baseUrl.content + '/public/catalog/' + id + '/bundles')
        .query({}, getBundlesBookComplete, getBundlesBookFailed);
    }

    function getBundlesBookComplete(response) {
      return response;
    }

    function getBundlesBookFailed(error) {
      $log.debug('Error in bundlesBookService: ' + error);
    }

  }

})();
