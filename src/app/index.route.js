(function() {
  'use strict';

  angular
    .module('testBooks')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/books',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('bookDetail', {
        url: '/books/:id',
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
      });

    $urlRouterProvider.otherwise('/books');

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

})();
