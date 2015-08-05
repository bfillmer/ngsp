
/* Site-wide Routes */

(function () {

  'use strict';

  function RouteConfig($urlRouterProvider, $stateProvider) {

    // Default application route.
    $urlRouterProvider.otherwise('map');

    $stateProvider
    
    /* MAP MODULE STATES */

    .state('map', {
      url: '/map',
      resolve: {},
      pageTitle: 'Highmaps Test',
      views: {
        'primary': {
          templateUrl: 'modules/map/tpl/primary.tpl.html',
          controller: 'MapController',
          controllerAs: 'mp'
        }
      }
    })

    ;

  }

  angular.module('ngsp')
  .config(['$urlRouterProvider', '$stateProvider', RouteConfig])
  ;

})();