import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';
import { TabsRoutingModule } from '../tabs/tabs-routing.module';
import { Tab1Module } from '../tabs/tab1/tab1.module';
import { Tab2Module } from '../tabs/tab2/tab2.module';

@NgModule({
    imports: [
        CommonModule,
        TabsRoutingModule,
        HttpModule,
        Tab1Module,
        Tab2Module
    ],
    declarations: [
        EmployeesComponent
    ],
    exports: [
        EmployeesComponent
    ],
    providers: [EmployeesService]
})

export class EmployeesModule { }