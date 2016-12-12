import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderByPipe'
})

export class OrderByPipe implements PipeTransform {
    transform(array: any[], sortType: string, sortReverse: boolean): any[] {
        if (array.length > 0) {
            let type: string = typeof (array[0][sortType]);
            if (type === 'number' && sortReverse === false) {
                return array.sort((a, b) => a[sortType] - b[sortType]);
            } else if (type === 'number' && sortReverse === true) {
                return array.sort((a, b) => b[sortType] - a[sortType]);
            } else if (type === 'string' && sortReverse === false) {
                return array.sort((a, b) => a[sortType].toLowerCase() > b[sortType].toLowerCase() ? 1
                    : a[sortType].toLowerCase() < b[sortType].toLowerCase() ? -1 : 0);
            } else {
                return array.sort((a, b) => a[sortType].toLowerCase() < b[sortType].toLowerCase() ? 1
                    : a[sortType].toLowerCase() > b[sortType].toLowerCase() ? -1 : 0);
            }
        } else{
            return array;
        }
    }
}