console.log('Heyyo');

$('document').ready(onReady);

let employeeArray = [];

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
}

function clickIt(){
    event.preventDefault();
    captureEmployeeData();
    displayEmployeeData();
    totalCost();
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
        $('#employeeChart').append(`<p>${employee.firstName}</p>`); 
        $('#employeeChart').append(`<p>${employee.lastName}</p>`);
        $('#employeeChart').append(`<p>${employee.idNumber}</p>`);
        $('#employeeChart').append(`<p>${employee.jobTitle}</p>`);
        $('#employeeChart').append(`<p>${employee.annualSalary}</p>`);
    }
}

function totalCost() {
    let monthlyTotal = 0;
    $('#totalMonthly').empty();
    for ( let salary of employeeArray ){
       monthlyTotal += salary.annualSalary/12;
       console.log(monthlyTotal);
    }
    $('#totalMonthly').append(monthlyTotal);
}