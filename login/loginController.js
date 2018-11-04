
 var app = angular.module('myApp');
 app.controller('loginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function($scope,$rootscope) {
      if(LoginService.login($scope.username, $scope.password)) {
       
        $scope.error = '';
        $rootScope.userName = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };    
  });



