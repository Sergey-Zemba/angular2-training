import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

import { TeamsService } from '../../teams/teams.service';
import { EmployeesService } from '../../employees/employees.service';
import { Employee } from '../../employees/models/employee';
import { Team } from '../../teams/models/team';
import { EmployeesSearchPipe } from '../../shared/employees-search.pipe';
import { OrderByPipe } from '../../shared/order-by.pipe';

@Component({
    selector: 'tab1',
    templateUrl: 'app/tabs/tab1/tab1.template.html',
    styleUrls: ['app/tabs/tab1/tab1.css']
})

export class Tab1Component implements OnInit, OnDestroy  {
    currentTeam: Team = null;
    availableEmployees: Employee[] = [];
    model: string = '';
    teamChangedSubscription: EventEmitter<Team> = new EventEmitter();
    currentMembers: Employee[] = [];
    refreshButtonIsActive: boolean = false;
    employeesSearchPipe: EmployeesSearchPipe = new EmployeesSearchPipe();
    orderByPipe: OrderByPipe = new OrderByPipe();
    constructor(private teamsService: TeamsService, private employeesService: EmployeesService) { }

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
            this.orderByPipe.transform(this.availableEmployees, 'id', false);
            this.disableRefreshButtonIfNoMembers();
        }
    }

    removeThisMember(index: number) {
        let member: Employee = this.currentMembers[index];
        this.currentMembers.splice(index, 1);
        this.availableEmployees.push(member);
        this.orderByPipe.transform(this.availableEmployees, 'id', false);
        this.disableRefreshButtonIfNoMembers();
    }

    ngOnInit() {
        this.currentTeam = this.teamsService.currentTeam;
        this.employeesService.getAllEmployees()
            .subscribe(
            () => {
                console.log('success');
                if (this.currentTeam.name) {
                    this.initEmployeesSets();
                }
            },
            error => {
                console.log(error);
            });
        this.teamChangedSubscription = this.teamsService.teamChanged$.subscribe(() => this.initEmployeesSets());
    }

    ngOnDestroy() {
        this.teamChangedSubscription.unsubscribe();
    }

    private disableRefreshButtonIfNoMembers() {
        if (this.currentTeam.members.length === 0 && this.currentMembers.length === 0) {
            this.refreshButtonIsActive = false;
        }
    }
}