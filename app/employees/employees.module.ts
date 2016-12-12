import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';
import { TabsRoutingModule } from '../tabs/tabs-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TabsRoutingModule,
        HttpModule
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