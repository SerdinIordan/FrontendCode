
hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
        $scope.users = [];
        $scope.user={};
        $scope.test = true;
        $scope.backuser = function() {
            // TODO back to Employee List page
            $location.url('/main');
        }

        $scope.resetuser = function() {
            // TODO back to Employee List page
            $scope.user={};
        }

        $scope.addUser = function () {
            $scope.users.push(angular.copy($scope.user));
            }

        $scope.show=function(){
            if($scope.test == true)
                $scope.test = false;
            else $scope.test = true;

        }

    }
    ]);
