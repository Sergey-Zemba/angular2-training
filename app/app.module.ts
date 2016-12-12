import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { TeamsModule } from './teams/teams.module';
import { Tab1Module } from './tabs/tab1/tab1.module';
import { Tab2Module } from './tabs/tab2/tab2.module';

enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([]),
        TeamsModule,
        EmployeesModule,
        Tab1Module,
        Tab2Module
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }