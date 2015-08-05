
// General Application Bootstrapping and Shared Resources

(function () {

  'use strict';

  function ApplicationConfig() {}

  function ApplicationController($rootScope) {

    var ac = this;

    // Some functionality for an app happens at the application level but is dependent
    // on the current modular state, therefore we check for state change and do what we
    // need from there.
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // Set page title based on pageTitle property of a state, if it exists.
      if (toState.hasOwnProperty('pageTitle')) {
        ac.pageTitle = toState.pageTitle;
      }
    });
  
  }

  angular.module('ngsp', [

    // Load sitewide module dependencies here.
    'ui.router',
    'ngLodash'

  ])
  .config(ApplicationConfig)
  .controller('ApplicationController', ['$rootScope', ApplicationController])
  ;

})();
