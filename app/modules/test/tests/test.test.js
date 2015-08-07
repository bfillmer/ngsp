
// Test Module Karma Tests

describe('Test Module', function(){
  
  var scope;

  // Load our Angular application.
  beforeEach(module('ngsp'));

  // Describe our controller.
  describe('TestController', function(){
    
    // Basic controller setup, create scope and such.
    beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      $controller('TestController as testCtrl', { $scope: scope });
    }));

    // Simple check that variable exists and is set as expected.
    it('Should have testVar defined and equal to "hello"', function() {
      expect(scope.testCtrl.testVar).toBeDefined();
      expect(scope.testCtrl.testVar).toBe('Hello');
    });

  });

});