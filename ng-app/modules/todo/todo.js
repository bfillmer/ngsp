
/* TODO MODULE */

(function () {

  'use strict';

  function TodoController() {

    var td = this;

    td.test = 'TodoController Available';

    console.log(td.test);

  }

  angular.module('ngsp')
  .controller('TodoController', TodoController);

})();