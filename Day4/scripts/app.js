var hrApp = angular.module("hrApp", ['ngRoute']);
hrApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        . when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
        })
        .when('/form', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
        })





    .otherwise({
            redirectTo:"/"
        });

}]);