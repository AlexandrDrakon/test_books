(function() {
  'use strict';

  angular
    .module('testBooks')
    .constant('baseUrl', {
      content: 'https://ds.aggregion.com/api',
      fileStorage: 'https://storage.aggregion.com/api'
    });

})();
