var myApp = angular.module("myApp");
myApp.controller("PasswordController", function ($scope) {

  $scope.password = "";
  $scope.strength = "password strength";
  $scope.personList = [];
  $scope.userList = [];

  $scope.person = {
    userName: "",
    password: "",
    setUser: function(value) {
      user = value;
      $scope.userList.push(user);
      console.log($scope.userList);
    },
    setPassword: function(value) {
      password = value;
      $scope.personList.push(password);
    }
  };
  
  $scope.grade = function() {
    var size = $scope.password.length;
    //var size = $scope.person.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } 
    else if (size > 3) {
      $scope.strength = 'medium';
    } 
    else {
      $scope.strength = 'weak';
    }
  };


  $scope.submit = function(){
    if($scope.text && $scope.user){
      $scope.password = $scope.text;
      $scope.person.setUser($scope.user);
      $scope.person.setPassword($scope.text);
      $scope.grade($scope);
      $scope.user = "";
      $scope.text = "";
      return true;
    }
    else {
      $scope.strength = "Enter Password Above";
      return false;
    }
  };
  
});

