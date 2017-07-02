angular.module('hrApp').controller('DemoMathController',['$scope',function($scope){
    $scope.op1 = 0;
    $scope.op2 = 0;
    $scope.op3 = 0;
    $scope.op4 = 0;


    $scope.calculeaza=function() {
        $scope.op1 = $scope.a + $scope.b;
        $scope.op2 = $scope.a - $scope.b;
        $scope.op3 = $scope.a * $scope.b;
        $scope.op4 = $scope.a / $scope.b;
    }

}]);