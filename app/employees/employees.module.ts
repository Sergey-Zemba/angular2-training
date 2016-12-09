import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { Tab1Component } from './tabs/tab1.component';
import { Tab2Component } from './tabs/tab2.component';
import { EmployeesSearchPipe } from './pipes/employees-search.pipe';
import { EmployeesHighlightPipe } from './pipes/employees-highlight.pipe';
import { EmployeesOrderByPipe } from './pipes/employees-order-by.pipe';

const appRoutes: Routes = [
    { path: 'one', component: Tab1Component },
    { path: 'two', component: Tab2Component },
    { path: '', redirectTo: '/one', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forChild(appRoutes),
    ],
    declarations: [
        EmployeesComponent,
        Tab1Component,
        Tab2Component,
        EmployeesSearchPipe,
        EmployeesHighlightPipe,
        EmployeesOrderByPipe
    ],
    exports: [
        EmployeesComponent
    ]
})

export class EmployeesModule { }