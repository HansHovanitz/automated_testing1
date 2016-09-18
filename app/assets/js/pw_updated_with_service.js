myApp.controller("PasswordController", function ($scope, PasswordService) {

  $scope.users = PasswordService.list();

  $scope.saveUser = function () {
    PasswordService.save($scope.newUser);
    $scope.newUser = {};
  }

  $scope.delete = function (id) {
    PasswordService.delete(id);
    if($scope.newUser.id == id){
      $scope.newUser = {};
    }
  }

  $scope.edit = function(id) {
    $scope.newUser = angular.copy(PasswordService.get(id));
  }
});

myApp.service('PasswordService', function() {

  //user with unique id
  var uid = 1;

  //user array
  var users = [
    {
      id: 0,
      'name': 'a_test_name',
      'password': 'a_test_pw',
      'pwStrength': 'medium'
    }
  ];

  this.save = function(user) {
    if (user.id == null) {
      user.id = uid++;
      this.grade(user);
      users.push(user);
    }
    else {
      for (i in users) {
        if (users[i].id == user.id) {
          users[i] = user;
          this.grade(user);
        }
      }
    }
  }

  this.get = function(id) {
    for (i in users) {
      if (users[i].id == id) {
        return users[i];
      }
    }
  }

  this.delete = function(id) {
    for (i in users) {
      if (users[i].id == id) {
        users.splice(i, 1);
      }
    }
  }

  this.list = function () {
    return users;
  }

  this.grade = function(user) { 
    var size = user.password.length;
    if (size > 8) {
      user.pwStrength = "strong";
    }
    else if (size > 3) {
      user.pwStrength = "medium";
    }
    else {
      user.pwStrength = "weak";
    }
  }
});
