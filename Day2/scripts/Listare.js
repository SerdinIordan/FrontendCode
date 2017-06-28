angular.module('hrApp').controller('Listare',['$rootScope','$scope',function ($rootScope,$scope) {
    var pics=[
        {
            url: "../images/lipstick.jpg",
            label:"Ruj",
            label2:"20"
        },{
            url: "../images/liner.jpg",
            label:"Liner",
            label2:"10"
        },{
            url: "../images/powder.jpg",
            label:"Pudra",
            label2:"35"
        },{
            url: "../images/brush.jpg",
            label:"Perie",
            label2:"15"
        }];
    $scope.pictures=pics;
    var pics2=[];
    $scope.selection = function(event,img) {


        var index = pics2.length;
        if (index == 0) alert("Nu exista niciun produs selectat")
        else {
            pics2.splice(index, 1);
        }
    }
    }]);
    function showList() {
        var myTable = '<table class="table table-hover" border="1"><tr><th>Nume produs</th><th>Pret</th><th>Imagine</th></tr>';
        for (var i in pics2) {
            myTable += ' <tr> <td>' + pics2[i].url + '</td><td>' + pics2[i].label + '</td><td>' + pics2[i].label2 + '</td></tr>';
        }

        myTable += '</table>';
        var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;
    }