import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../helper-classes/employee';

@Pipe({
    name: 'employeesOrderByPipe'
})

export class EmployeesOrderByPipe implements PipeTransform {
    transform(employees: Employee[], sortType: string, sortReverse: boolean): Employee[] {
        if (employees.length > 0) {
            let type: string = typeof (employees[0][sortType]);
            if (type === 'number' && sortReverse === false) {
                return employees.sort((a, b) => a[sortType] - b[sortType]);
            } else if (type === 'number' && sortReverse === true) {
                return employees.sort((a, b) => b[sortType] - a[sortType]);
            } else if (type === 'string' && sortReverse === false) {
                return employees.sort((a, b) => a[sortType].toLowerCase() > b[sortType].toLowerCase() ? 1
                    : a[sortType].toLowerCase() < b[sortType].toLowerCase() ? -1 : 0);
            } else {
                return employees.sort((a, b) => a[sortType].toLowerCase() < b[sortType].toLowerCase() ? 1
                    : a[sortType].toLowerCase() > b[sortType].toLowerCase() ? -1 : 0);
            }
        } else{
            return employees;
        }
    }
}