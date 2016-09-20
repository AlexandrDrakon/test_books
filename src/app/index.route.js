(function() {
  'use strict';

  angular
    .module('testBooks')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('bookDetail', {
        url: '/book/:id',
        templateUrl: 'app/components/book-detail/bookDetail.html',
        controller: 'BookDetailController',
        controllerAs: 'book',
        resolve: {
          /** @ngInject */
          infoBook: function($stateParams, infoBookService) {
            return infoBookService.getInfoBook($stateParams.id);
          },
          /** @ngInject */
          bundlesBook: function($stateParams, bundlesBookService) {
            return bundlesBookService.getBundlesBook($stateParams.id);
          }
        }
      })
      .state('400', {
        url: '/errors/400',
        templateUrl: 'app/components/errors/400.html'
      })
      .state('404', {
        url: '/errors/404',
        templateUrl: 'app/components/errors/404.html'
      })
      .state('500', {
        url: '/errors/500',
        templateUrl: 'app/components/errors/500.html'
      });

    $urlRouterProvider.otherwise('/errors/404');

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

})();
