hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [
        {
            label: "Employee list",
            url: "#/employeeslist"
        }
    ];

    // TODO #12 - load menu items from Value
    $scope.employeeActionList=employeeActionsService;
    $scope.currentDate = new Date();

}]);
