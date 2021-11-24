var employeeDetails = {};
function userInput() {
    employeeDetails.name = document.querySelector("#name").value;
    employeeDetails.gender = document.querySelector("#gender").value;
    employeeDetails.age = document.querySelector("#age").value;
    employeeDetails.department = document.querySelector("#dep").value;
    employeeDetails.baseSalary = document.querySelector("#baseSalary").value;
    employeeDetails.baseSalary = parseInt(employeeDetails.baseSalary);
    basicCalculation();
}
function basicCalculation() {
    employeeDetails.hra = 50 *(employeeDetails.baseSalary) / 100;
    employeeDetails.pf = 12 *(employeeDetails.baseSalary) / 100;
    employeeDetails.totalSalary = employeeDetails.baseSalary + employeeDetails.hra + employeeDetails.pf;
    employeeDetails.tax = 0;
    taxCalculation();
}
function taxCalculation() {
    while (employeeDetails.tax == 0) {
        if (employeeDetails.gender == "male") {
            if (employeeDetails.totalSalary >= 1500000) {
                employeeDetails.tax = 30*(employeeDetails.totalSalary)/ 100;
            }
            else if (employeeDetails.totalSalary >= 1250000) {
                employeeDetails.tax = 25 * (employeeDetails.totalSalary) / 100;
            }
            else if (employeeDetails.totalSalary >= 1000000) {
                employeeDetails.tax = 20 * (employeeDetails.totalSalary) / 100;
            }
            else if (employeeDetails.totalSalary >= 750000) {
                employeeDetails.tax = 15 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 500000) {
                employeeDetails.tax = 10 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 250000) {
                employeeDetails.tax = 5 * employeeDetails.totalSalary / 100;
            }
            else {
                employeeDetails.tax = 0;
            }
        }
        if (employeeDetails.gender == "female") {
            if (employeeDetails.totalSalary >= 1500000) {
                employeeDetails.tax = 25 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 1250000) {
                employeeDetails.tax = 20 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 1000000) {
                employeeDetails.tax = 15 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 750000) {
                employeeDetails.tax = 10 * employeeDetails.totalSalary / 100;
            }
            else if (employeeDetails.totalSalary >= 500000) {
                employeeDetails.tax = 5 * employeeDetails.totalSalary / 100;
            }
            else {
                employeeDetails.tax = 0;
            }
        }
        break;
    }
    employeeDetails.monthlyEarnings = employeeDetails.totalSalary - employeeDetails.tax;
    showEmployeeDetails();
}
function showEmployeeDetails() {
    document.querySelector(".container2").style.display = 'block';
    for (var tempKey in employeeDetails) {
        var id = '.' + tempKey;
        document.querySelector(id).innerHTML = employeeDetails[tempKey];
    }
    document.querySelector("#name").value = '';
    document.querySelector("#gender").value = '';
    document.querySelector("#age").value = '';
    document.querySelector("#dep").value = '';
    document.querySelector("#baseSalary").value = '';
}