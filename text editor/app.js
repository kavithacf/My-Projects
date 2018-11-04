var myAppModule = angular.module('myApp', ['ui.tinymce']);

myAppModule.controller('TinyMceController', function($scope) {
  $scope.tinymceModel ='Welcome to text editor';
  

  // $scope.getContent = function {
  //   console.log('Editor content:', $scope.tinymceModel);
  // };

  // $scope.setContent = function() {
  //   $scope.tinymceModel = 'Time: ' + (new Date());
  // };


  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };
});