import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../helper-classes/employee';

@Pipe({
    name: 'employeesSearchPipe',
    pure: false
})

export class EmployeesSearchPipe implements PipeTransform {
    transform(employees: Employee[], query: string): Employee[] {
        return employees.filter(v => v.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
            || v.job.toLowerCase().indexOf(query.toLowerCase()) !== -1
            || v.grade.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
}