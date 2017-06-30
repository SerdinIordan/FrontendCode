hrApp.controller('FormsController', ['$scope', function ($scope) {

    $scope.functie = function () {
        if ($scope.myForm.input.$valid) {
            console.log("Succes");
        }

    };
}]);