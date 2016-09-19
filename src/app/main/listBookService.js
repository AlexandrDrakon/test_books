(function() {
  'use strict';

  angular
    .module('testBooks')
    .factory('listBookService', listBookService);

  /** ngInject */
  function listBookService($resource, baseUrl, $log) {
    return {
      getListBook: getListBook
    };

    function getListBook() {
      return $resource(baseUrl.content + '/public/catalog')
          .query({}, getListBookComplete, getListBookFailed);
    }

    function getListBookComplete(response) {
      return response;
    }

    function getListBookFailed(error) {
      $log.debug('Error in listBookService: ' + error);
    }

  }
})();
