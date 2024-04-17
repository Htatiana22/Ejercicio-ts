import { Employee } from './employee.interface';
import { EmployeeDeparment } from "./departments.enum";

const employeeTest: Employee = {
    id: 1,
    name: 'Juan',
    department: EmployeeDeparment.HR,
    salary: 10000,
};

function calcEmployeeSalary(employee: Employee) {
    if (employee.department === EmployeeDeparment.Finance) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * EmployeeDeparment.Finance);
    } else if (employee.department === EmployeeDeparment.HR) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * EmployeeDeparment.HR);
    } else if (employee.department === EmployeeDeparment.IT) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * EmployeeDeparment.IT);
    } else if (employee.department === EmployeeDeparment.Sales) {
        return ('el empleado ' + employee.name + ' tiene un salario de ' + employee.salary * EmployeeDeparment.Sales);
    }
};

console.log(calcEmployeeSalary(employeeTest));
