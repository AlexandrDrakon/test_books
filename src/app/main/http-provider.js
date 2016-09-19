(function() {
  'use strict';

  angular
    .module('testBooks')
    .config(httpProviderConfig);

  /** @ngInject */
  function httpProviderConfig($httpProvider) {

    $httpProvider.interceptors.push(function() {
      return {
        'request': function(config) {

          return config;
        },
        'requestError': function(rejection) {
          debugger;

        },
        'response': function(response) {

          return response;
        },
        'responseError': function(rejection) {
          debugger;

        }
      }
    });

  }

})();
