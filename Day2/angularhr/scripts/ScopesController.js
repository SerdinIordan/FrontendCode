angular.module('hrApp').controller('ScopesController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    //declaram mai bine cu undefined
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };



}]);