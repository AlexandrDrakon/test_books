(function() {
  'use strict';

  angular
    .module('errors')
    .config(httpProviderConfig);

  /** ngInject */
  function httpProviderConfig($httpProvider) {

    $httpProvider.interceptors.push(function() {
      return {
        'responseError': function(rejection) {
          if (rejection.status === 400) {
            $state.go('400');
          } else if (rejection.status === 404) {
            $state.go('404');
          } else if (rejection.status === 500) {
            $state.go('500');
          }
        }
      }
    });

  }

})();
