hrApp.controller('ColorsController', ['$scope', function ($scope) {
        $scope.color = {};
    console.log('orice');
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text": "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text": "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.variabila = undefined;
    $scope.changeColor = function () {
        $scope.variabila = $scope.selected2.class;
    };


}]);
