/*
(function() {
  'use strict';

  angular
    .module('testBooks')
    .config(httpProviderConfig);

  /!** @ngInject *!/
  function httpProviderConfig($httpProvider) {

    $httpProvider.interceptors.push(function() {
      return {
        'request': function(config) {

        },
        'requestError': function(rejection) {

        },
        'response': function(response) {

        },
        'responseError': function(rejection) {
          //debugger;
        }
      }
    });

  }

})();
*/
