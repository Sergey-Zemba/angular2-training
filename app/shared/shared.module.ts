import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderByPipe } from './order-by.pipe';
import { HighlightPipe } from './highlight.pipe';
import { EmployeesSearchPipe } from './employees-search.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [
        OrderByPipe,
        HighlightPipe,
        EmployeesSearchPipe
    ],
    exports: [
        OrderByPipe,
        HighlightPipe,
        EmployeesSearchPipe
    ]
})

export class SharedModule { }