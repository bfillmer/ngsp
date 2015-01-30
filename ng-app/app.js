
// General Application Bootstrapping and Shared Resources

(function () {

  'use strict';

  function ApplicationConfig() {}

  function ApplicationController() {

    var ac = this;

    ac.test = 'Application Controller Available';

    console.log(ac.test);
  
  }

  angular.module('ngsp', [

    // Load sitewide module dependencies here.
    'ui.router',
    'ngLodash'

  ])
  .config(ApplicationConfig)
  .controller('ApplicationController', ApplicationController);

})();
