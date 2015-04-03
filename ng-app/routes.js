
/* Site-wide Routes */

(function () {

  'use strict';

  function RouteConfig($urlRouterProvider, $stateProvider) {

    // Default application route.
    $urlRouterProvider.otherwise('todo');

    $stateProvider
    
    /* TODO MODULE STATES */

    .state('todo', {
      url: '/todo',
      resolve: {},
      pageTitle: 'Todo List',
      views: {
        'primary': {
          templateUrl: 'modules/todo/tpl/primary.tpl.html',
          controller: 'TodoController',
          controllerAs: 'td'
        }
      }
    })

    ;

  }

  angular.module('ngsp')
  .config(['$urlRouterProvider', '$stateProvider', RouteConfig]);

})();