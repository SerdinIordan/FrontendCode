hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        findAll: function () {
            return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                .success(function (employees) {

                })
                .error(function (err) {
                    return {
                        "id": 100,
                        "firstName": "Steven",
                        "lastName": "King",
                        "email": "SKING",
                        "phoneNumber": "515.123.4567",
                        "hireDate": "1987-06-17",
                        "jobId": 1,
                        "salary": 24000.00,
                        "commissionPct": null,
                        "managerId": null,
                        "departmentId": 90
                    };
                });




           /* for (var j = 0; j < managers.length; j++) {
                // Check if the picked element is already printed
                var k;
                for (k = 0; k < managers.length; k++) {
                    if (managers[j].employeeId === managers[k].employeeId && j!==k) {
                        lista.push(managers[j]);
                    }
                }
            }
            lista=[1,2,3];*/
           //return managers;
        },
        findManagersfromEmployees:function (employees) {
            var managers = [];

            for (var i = 0; i < employees.length; i++) {
                managers[i] = employees[i].managerId;
            }
            var lista = [];
            //lista in care punem managerii diferiti
            // adaug un element in lista2(primul)


            var lista2=[];
            //lista2.push(managers[0]);
            for (var i=0;i<managers.length-1;i++){
                gasit=0;
                for (var j=i+1;((j<managers.length));j++){
                    if (managers[j]==managers[i]){
                        gasit=1;
                    }
                }
                if (gasit==0){
                    lista2.push(managers[i]);
                }
            }

            return lista2;
        }

    };
}]);