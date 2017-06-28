angular.module('hrApp').controller('MeniuController',['$rootScope','$scope',function ($rootScope,$scope) {
    $scope.demoActionList= [
        {
            label:"ShoppingCart",
            url: "views/shoppingcart.html"

        }
    ];

}]);
