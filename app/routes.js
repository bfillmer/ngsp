
/* Site-wide Routes */

(function () {

  'use strict';

  function RouteConfig($urlRouterProvider, $stateProvider) {

    // Default application route.
    $urlRouterProvider.otherwise('test');

    $stateProvider
    
    /* TEST MODULE STATES */

    .state('test', {
      url: '/test',
      resolve: {},
      pageTitle: 'Test Module',
      views: {
        'primary': {
          templateUrl: 'modules/test/tpl/primary.tpl.html',
          controller: 'TestController',
          controllerAs: 'test'
        }
      }
    })

    ;

  }

  angular.module('ngsp')
  .config(['$urlRouterProvider', '$stateProvider', RouteConfig])
  ;

})();