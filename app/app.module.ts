import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { TeamsModule } from './teams/teams.module';

enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([]),
        TeamsModule,
        EmployeesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }