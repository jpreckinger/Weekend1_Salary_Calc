console.log('Heyyo');

$('document').ready(onReady);

let employeeArray = [];
let monthlyTotal = 0;

class Employee{
    constructor(firstName, lastName, idNumber, jobTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

function onReady(){
    console.log('HeyyO!');
    $('#submit').on('click', clickIt);
    $('#employeeChart').on('click', '.deleteEmployee', deleteEmployee);
}

function clickIt(){
    event.preventDefault();
    captureEmployeeData();
    displayEmployeeData();
    totalCost();
    costAlert();
    $('input').val('');
}

function captureEmployeeData(){
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idIn').val();
    let jobTitle = $('#jobTitleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    let newEmployee = new Employee( firstName, lastName, idNumber, jobTitle, annualSalary );
    employeeArray.push(newEmployee);
    //console.log(employeeArray);   
}

function displayEmployeeData() {
    $('#employeeChart').empty();
    for ( let employee of employeeArray ){
        $('#employeeChart').append(`<tr><td>${employee.firstName}</td><td>${employee.lastName}</td><td id='>${employee.idNumber}</td><td>${employee.jobTitle}</td><td>${employee.annualSalary}</td><td><button class="deleteEmployee">Delete</button></td></tr>`); 
        // $('#employeeChart').append(`<td>${employee.lastName}</td>`);
        // $('#employeeChart').append(`<td>${employee.idNumber}</td>`);
        // $('#employeeChart').append(`<td>${employee.jobTitle}</td>`);
        // $('#employeeChart').append(`<td>${employee.annualSalary}</td>`);
        // $('#employeeChart').append(`<button class="deleteEmployee">Delete</button></tr>`);
    }
}

function totalCost() {
    $('#totalMonthly').empty();
    monthlyTotal = 0;
    for ( let salary of employeeArray ){
       monthlyTotal += salary.annualSalary/12;
       console.log(monthlyTotal);
    }
    $('#totalMonthly').append(`<h2>${monthlyTotal}</h2>`);
}

function costAlert(){
    if( monthlyTotal > 20000 ){
        $('#totalMonthly').addClass('red');
    }

}

// function deleteEmployee(){
//     console.log('delete me');
    
//     $(this).parent().empty()
// }

function deleteEmployee() {
    let selectedItem = $(this).parent().text();
    for (let i=0; i<employeeArray.length; i++){

        // if(selectedItem.includes(employeeArray[i].idNumber)){
        //     monthlyTotal = monthlyTotal - (employeeArray[i].annualSalary/12);            
        //     employeeArray.splice(i, 1);
        //     $(this).parent().empty();
        //     displayEmployeeData();
        }
    }
}