(function() {
  'use strict';

  angular
    .module('errors')
    .config(httpProviderConfig);

  /** ngInject */
  function httpProviderConfig($httpProvider) {

    $httpProvider.interceptors.push(
      /** ngInject */
      function($injector, $q) {
        return {
          'responseError': function(rejection) {
            if (rejection.status === 400) {
              $injector.get('$state').go('400');
            } else if (rejection.status === 404) {
              $injector.get('$state').go('404');
            } else if (rejection.status === 500) {
              $injector.get('$state').go('500');
            }
            return $q.reject(rejection);
          }
        }
      }
    );

  }

})();
