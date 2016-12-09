import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeesModule } from './employees/employees.module';
import { TeamsModule } from './teams/teams.module';

enableProdMode();

const appRoutes: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(appRoutes),
        HttpModule,
        TeamsModule,
        EmployeesModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }