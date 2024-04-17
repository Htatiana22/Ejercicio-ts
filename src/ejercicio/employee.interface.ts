import { EmployeeDeparment } from "./departments.enum";

export interface Employee {
    id: number;
    name: string;
    department: EmployeeDeparment;
    salary: number;
};