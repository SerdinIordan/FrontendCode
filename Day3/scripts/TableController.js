hrApp.controller('TableController', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

        $scope.users = [];
        $scope.addUser = function () {
            $scope.users.push({
                'user.firstName': $scope.firstName,
                'user.lastName': $scope.lastName,
                'user.cnp': $scope.cnp,
                'user.age': $user.age
            });
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.cnp = "";
            $scope.age = "";
        }

    }]);