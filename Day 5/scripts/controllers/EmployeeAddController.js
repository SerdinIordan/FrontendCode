hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory','ManagerService',
    function($scope, $http, $location,$CommonResourcesFactory,ManagerService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */
        //ce trebuie intors
        $scope.jobs={};
        $http({url:$CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.departaments={};
        $http({url:$CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departaments = data;
            });

        $scope.manager={};
        $scope.empl={};

        $scope.employees = [];
        $http({url: $CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        //$scope.managers = ManagerService.findAll($scope.employees);
        ManagerService.findAll()
            .then(function (res) {
                $scope.managers = ManagerService.findManagersfromEmployees(res.data);
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });


       console.log($scope.managers);


        $scope.reset = function () {
            this.employee = {};
        };


        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        $scope.resetEmployee = function() {
            $scope.employee={};
            console.log("mesajreset");
        }
        $scope.create = function (addEmployee) {
            $http({url: $CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                    console.log("mesaj");
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);