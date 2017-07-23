/**
 * Created by Iordan.Serdin on 6/27/2017.
 */
var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Diana',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500,
        euroValue: 0
    }
]; //asta e un vector

    function showList() {
        var myTable = '<table class="table table-hover" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>euroValue</th><th>Vizualizare</th><th>Stergere</th></tr>';
        for(var i in employeesList) {
            myTable += ' <tr> <td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'<button type="button" onclick="showConvert(' + i+' )"> Convert salary</button></td><td>'+employeesList[i].euroValue+'</td>'+'<td><button type="button" onclick="showMessage(' + i+' )"> Vizualizare</button></td>'+'<td><button type="button" onclick="showSterge(' + i+' )"> Stergere</button></td></tr>';
        }
        myTable+='<tr><td id="demo"> Prenume des:</td><td id="demo2"> Numar Unic:</td> <td> Primele 5:'+functie3()+'</td><td id="demo4"> Medie:</td></tr>';
        myTable+= '</table>';
        var container= document.getElementById('listcontainer');
        container.innerHTML = myTable;
        functie1();
        functie2();
        functie3();
        //la functia JavaScript facem diferenta intre js si html prin 'html' si javascript simplu

    }
    var Employee = function(firstName, lastName, phone, salary,euroValue) {
        this.firstName= firstName;
        this.lastName= lastName;
        this.phone= phone;
        this.salary = salary;
        this.euroValue = euroValue;
    }

    function addEmployee() {
        var firstName = document.getElementById("firstName").value; //ia valoarea din campul firstName
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;
        employeesList.push(new Employee(firstName,lastName,phone,salary));
        showList();
    }
    function showSum() {
        var sum = 0;
        for(var i in employeesList) {
            sum = sum + employeesList[i].salary;
        }
        var container= document.getElementById('calculat');
        container.innerHTML=sum;
       // container.innerHTML = sum;
    }
    function showDelete() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;
        employeesList.pop(new Employee(firstName,lastName,phone,salary));
        showList();
    }
    function showConvert(i) {
        var euro;
        employeesList[i].euroValue=employeesList[i].salary*4.43;
        showList();
}
function showMessage(i){
    alert(employeesList[i].firstName+","+employeesList[i].lastName+","+employeesList[i].phone+","+employeesList[i].salary);
}
function showSterge(i){
    employeesList.splice(i,1);
    showList();
}
function functie1(){
    var max=0;
    var nume;
    var nr=[];
    for(var i=0; i<=employeesList.length;i++)
        nr[i]=0;
    for (var i=0;i<employeesList.length;i++)
        for(var j=i+1;j<employeesList.length;j++) {
        if (employeesList[i].firstName==employeesList[j].firstName)
            nr[i]++;
    }
    var pos;
    for (var i=0;i<nr.length;i++) {
        if (max < nr[i]) {
            pos = i;
            max = nr[i];
        }
    }
    if (pos!=undefined) {
        nume = employeesList[pos].firstName;
        document.getElementById("demo").innerHTML = nume;
    }else{
        document.getElementById("demo").innerHTML="nu se repeta";
    }
}
function functie2(){
    var nume;
    var ok=0;
    var nr=[];
    for(var i=0; i<employeesList.length;i++) {
        nr[i] = 0;
    }
    for (var i=0;i<employeesList.length;i++) {
        for (var j = i + 1; j < employeesList.length; j++) {
            if (employeesList[i].firstName == employeesList[j].firstName)
                nr[i]++;
        }
    }
    var pos;
    for (var i=0;i<nr.length;i++) {
        if (nr[i]==0){
          ok++;
        }
    }

        document.getElementById("demo2").innerHTML = ok;

}
function functie3(){
    var max=0;
    var tel=[];
    var nr=[];

    for(var i=0; i<=employeesList.length;i++)
        nr[i]=0;
    for (var i=0;i<employeesList.length;i++)
        for(var j=i+1;j<employeesList.length;j++) {
            if (employeesList[i].phone==employeesList[j].phone)
                nr[i]++;
        }
    var pos;
    for (var i=0;i<nr.length;i++) {
        if (max < nr[i]) {
            pos = i;
            max = nr[i];
        }
    }
    for (var i=0;i<employeesList.length;i++)
        for(var j=0;j<nr.length;j++)
            if(nr[j]==max)
                tel[i]=employeesList[j];

    for(var i=0;i<tel.length;i++)
        for(var j=i+1;j<=tel.length;j++)
            if(tel[i]==tel[j])
                tel[j]=0;
    var str="";
    for(var i=0;i<tel.length;i++)
        if(tel[i])
            str=str+tel[i];
    return str;
}
    function functie4(){
    var s=0;
    for (var i in employeesList){
        s=s+employeesList[i].salary;
    }
    var m=s/employeesList.length;
    document.getElementById("demo4").innerHTML = m;
}
function showSort(){
        var s=document.getElementById('sortby').value;
        if (s==1){
            for (var i=0;i<employeesList.length-1;i++){
                for(var j=i+1;j<employeesList.length;j++){
                    if (employeesList[i].lastName>employeesList[j].lastName){
                        var aux;
                        aux=employeesList[i];
                        employeesList[i]=employeesList[j];
                        employeesList[j]=aux;
                    }
                }
            }
            showList();
        }
    if (s==2){
        for (var i=0;i<employeesList.length-1;i++){
            for(var j=i+1;j<employeesList.length;j++){
                if (employeesList[i].firstName>employeesList[j].firstName){
                    var aux;
                    aux=employeesList[i];
                    employeesList[i]=employeesList[j];
                    employeesList[j]=aux;
                }
            }
        }
        showList();
    }
    if (s==3){
        for (var i=0;i<employeesList.length-1;i++){
            for(var j=i+1;j<employeesList.length;j++){
                if (employeesList[i].phone>employeesList[j].phone){
                    var aux;
                    aux=employeesList[i];
                    employeesList[i]=employeesList[j];
                    employeesList[j]=aux;
                }
            }
        }
        showList();
    }
    if (s==4){
        for (var i=0;i<employeesList.length-1;i++){
            for(var j=i+1;j<employeesList.length;j++){
                if (employeesList[i].salary>employeesList[j].salary){
                    var aux;
                    aux=employeesList[i];
                    employeesList[i]=employeesList[j];
                    employeesList[j]=aux;
                }
            }
        }
        showList();
    }
}
function filtrare(){
    var s=document.getElementById('filtrare').value;

    for (var i in employeesList){
        if ((employeesList[i].firstName==s)||(employeesList[i].lastName==s)||(employeesList[i].phone==s)||(employeesList[i].salary==s)){
            var str =employeesList[i].firstName+employeesList[i].lastName+employeesList[i].phone+employeesList[i].salary;
        }
    }
    var container= document.getElementById('numes');
    container.innerHTML = str;


}
/*function afisare(){
    var facts = [
‘Chuck Norris threw a grenade and killed 50 people, then it exploded.’,‘Chuck Norris counted to infinity. Twice.’,
‘Chuck Norris can kill two stones with one bird.’,‘Chuck Norris can hear sign language.’];

}*/