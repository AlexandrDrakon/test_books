(function() {
  'use strict';

  angular
    .module('bookDetail')
    .factory('infoBookService', infoBookService);

  /** ngInject */
  function infoBookService($resource, baseUrl, $log) {
    return {
      getInfoBook: getInfoBook
    };

    function getInfoBook(id) {
      return $resource(baseUrl.content + '/public/catalog/' + id)
        .get({}, getInfoBookComplete, getInfoBookFailed);
    }

    function getInfoBookComplete(response) {
      return response;
    }

    function getInfoBookFailed(error) {
      $log.debug('Error in infoBookService: ' + error);
    }
  }

})();
