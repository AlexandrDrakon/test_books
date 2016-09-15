(function() {
  'use strict';

  angular
    .module('testBooks')
    .service('request', request);

  /** @ngInject */
  function request($resource) {

    var URL_CONTENT = 'https://ds.aggregion.com/api';
    //var URL_FILE_STORAGE = 'https://storage.aggregion.com/api';

    this.listBooks = $resource(URL_CONTENT + '/public/catalog');

  }
})();
