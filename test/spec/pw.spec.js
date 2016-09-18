describe('PasswordController', function() {
  beforeEach(module('myApp'));

  var $controller;
  var $scope;
  var controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe("$scope.grade", function() {

    beforeEach(function() {
      $scope = {};
      controller = $controller("PasswordController", { $scope: $scope });
    });

    it("method should exist", function() {
      expect($scope.grade).toBeDefined();
    });

    it('sets the strength to "strong" if the password length is >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('strength to "medium" if the password length is >8 chars && <3 chars', function() {
      $scope.password = 'between';
      $scope.grade();
      expect($scope.strength).toEqual('medium');
    });

    it('sets the strength to "weak" if the password length <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });

  describe("$scope.submit", function() {

    beforeEach(function() {
      $scope = {};
      controller = $controller("PasswordController", { $scope: $scope });
    });

    it("method should exist", function() {
      expect($scope.submit).toBeDefined();
    });

    it("sets strength to medium though submit", function() {
      //check this
      spyOn(console, 'log');
      //
      $scope.text = "abcde";
      $scope.user = "user";
      $scope.submit();
      expect($scope.strength).toEqual('medium');
    });

    it("if the user enters no text nothing should happen", function() {
      $scope.text = "";
      var isValid = $scope.submit();
      expect(isValid).toBeFalsy();
    });
  });

  describe("spy stuff", function () {

    beforeEach(function() {
      $scope = {};
      controller = $controller("PasswordController", { $scope: $scope });
    });

    it("spy on console.log through submit", function() {

      // Source
      $scope.text = 'a';
      $scope.user = 'user';
      var userList = ["user"];

      // Test
      spyOn(console, 'log');
      $scope.submit();
      expect(console.log).toHaveBeenCalledWith(userList);
    });
/*
    it("SINON: spy on console.log through submit", function() {

      // Source
      $scope.text = 'a';
      $scope.user = 'user';
      var userList = ["user"];

      // Test
      var spy = sinon.spy($scope.submit);
      $scope.submit(spy);
      expect(spy.called).toBe(true);
    });
*/
  });
});




