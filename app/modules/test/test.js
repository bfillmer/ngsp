
/* TEST MODULE */

(function () {

  'use strict';

  function TestController() {

    var test = this;

    test.testVar = 'Hello';

  }

  angular.module('ngsp')
  .controller('TestController', TestController)
  ;

})();