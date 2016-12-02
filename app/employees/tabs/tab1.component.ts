import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { TeamsService } from '../../teams/teams.service';
import { EmployeesService } from '../employees.service';
import { Employee } from '../helper-classes/employee';
import { TabComponent } from './tab.component';
import { EmployeesSearchPipe } from '../pipes/employees-search.pipe';
import { EmployeesOrderByPipe } from '../pipes/employees-order-by.pipe';

@Component({
    selector: 'tab1',
    templateUrl: 'app/employees/tabs/tab1.template.html',
    providers: [EmployeesService],
    styleUrls: ['app/employees/tabs/tab1.css']
})

export class Tab1Component extends TabComponent {
    currentMembers: Employee[] = [];
    refreshButtonIsActive: boolean = false;
    employeesSearchPipe: EmployeesSearchPipe = new EmployeesSearchPipe();
    employeesOrderByPipe: EmployeesOrderByPipe = new EmployeesOrderByPipe();
    constructor(teamsService: TeamsService, employeesService: EmployeesService) { super(teamsService, employeesService); }

    resultFormatter = (x: { name: string, job: string, grade: string }) => x.name + ', ' + x.job + ' (' + x.grade + ')';

    search = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .map(term => term === '' ? [] : this.employeesSearchPipe.transform(this.availableEmployees, term));

    initEmployeesSets() {
        this.availableEmployees = this.employeesService.getAvailableEmployees(this.currentTeam.members);
        this.currentMembers = Array.from(this.currentTeam.members);
        this.refreshButtonIsActive = this.currentTeam.members.length > 0 ? true : false;
    }

    itemSelected($event: NgbTypeaheadSelectItemEvent) {
        $event.preventDefault();
        this.currentMembers.push($event.item);
        this.availableEmployees.splice(this.availableEmployees.indexOf($event.item), 1);
        this.focus();
        this.model = '';
        if (this.refreshButtonIsActive === false) {
            this.refreshButtonIsActive = true;
        }
    }

    refreshCurrentTeam() {
        this.teamsService.refreshCurrentTeam(this.currentMembers);
        if (this.currentMembers.length === 0) {
            this.refreshButtonIsActive = false;
        }
    }

    removeLastMember() {
        if (this.model === '' && this.currentMembers.length > 0) {
            this.availableEmployees.push(this.currentMembers.pop());
            this.employeesOrderByPipe.transform(this.availableEmployees, 'id', false);
            this.disableRefreshButtonIfNoMembers();
        }
    }

    removeThisMember(index: number) {
        let member: Employee = this.currentMembers[index];
        this.currentMembers.splice(index, 1);
        this.availableEmployees.push(member);
        this.employeesOrderByPipe.transform(this.availableEmployees, 'id', false);
        this.disableRefreshButtonIfNoMembers();
    }

    focus() {
        document.getElementById('tagInput').focus();
    }

    private disableRefreshButtonIfNoMembers() {
        if (this.currentTeam.members.length === 0 && this.currentMembers.length === 0) {
            this.refreshButtonIsActive = false;
        }
    }
}