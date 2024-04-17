"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const departments_enum_1 = require("./departments.enum");
const employeeTest = {
    id: 1,
    name: 'Juan',
    department: departments_enum_1.EmployeeDeparment.HR,
    salary: 10000,
};
function calcEmployeeSalary(employee) {
    if (employee.department === departments_enum_1.EmployeeDeparment.Finance) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * departments_enum_1.EmployeeDeparment.Finance);
    }
    else if (employee.department === departments_enum_1.EmployeeDeparment.HR) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * departments_enum_1.EmployeeDeparment.HR);
    }
    else if (employee.department === departments_enum_1.EmployeeDeparment.IT) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * departments_enum_1.EmployeeDeparment.IT);
    }
    else if (employee.department === departments_enum_1.EmployeeDeparment.Sales) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * departments_enum_1.EmployeeDeparment.Sales);
    }
}
;
console.log(calcEmployeeSalary(employeeTest));
