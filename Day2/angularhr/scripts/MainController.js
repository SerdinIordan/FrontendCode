angular.module('hrApp').controller('MainController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.name="valoare";
    console.log($scope.name);
}]);