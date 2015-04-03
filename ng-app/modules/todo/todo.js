
/* TODO MODULE */

(function () {

  'use strict';

  function TodoController() {

    var td = this;

    td.addItem = function () {
      console.log(td.newTodoItem);
    };

  }

  function addTodoItemDirective() {
    return {
      restrict: 'E',
      templateUrl: 'modules/todo/tpl/add-item.tpl.html',
      controller: 'TodoController',
      controllerAs: 'td'
    };
  }

  angular.module('ngsp')
  .controller('TodoController', TodoController)
  .directive('addTodo', addTodoItemDirective)
  ;

})();