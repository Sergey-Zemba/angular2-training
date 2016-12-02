import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { TeamsComponent } from './teams/teams.component';
import { Tab1Component } from './employees/tabs/tab1.component';
import { Tab2Component } from './employees/tabs/tab2.component';
import { EmployeesSearchPipe } from './employees/pipes/employees-search.pipe';
import { EmployeesHighlightPipe } from './employees/pipes/employees-highlight.pipe';
import { EmployeesOrderByPipe } from './employees/pipes/employees-order-by.pipe';

enableProdMode();

const appRoutes: Routes = [
    { path: 'one', component: Tab1Component },
    { path: 'two', component: Tab2Component },
    { path: '', redirectTo: '/one', pathMatch: 'full' }
];

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(), RouterModule.forRoot(appRoutes), HttpModule],
    declarations: [AppComponent, EmployeesComponent, TeamsComponent, Tab1Component, Tab2Component,
        EmployeesSearchPipe, EmployeesHighlightPipe, EmployeesOrderByPipe],
    bootstrap: [AppComponent]
})

export class AppModule { }