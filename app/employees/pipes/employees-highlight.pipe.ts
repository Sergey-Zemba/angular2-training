import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'employeesHighlightPipe'
})

export class EmployeesHighlightPipe implements PipeTransform {
    transform(text: string, query: string): string {
        let regexp: RegExp = new RegExp(query.trim(), 'gi');
        return query !== '' ? text.replace(regexp, (match) => `<span class="highlight">${match}</span>`) : text;
    }
}