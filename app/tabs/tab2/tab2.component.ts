import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { TeamsService } from '../../teams/teams.service';
import { Employee } from '../../employees/models/employee';
import { Team } from '../../teams/models/team';
import { EmployeesService } from '../../employees/employees.service';

@Component({
    selector: 'tab2',
    templateUrl: 'app/tabs/tab2/tab2.template.html',
    styleUrls: ['app/tabs/tab2/tab2.css']
})

export class Tab2Component implements OnInit, OnDestroy {
    currentTeam: Team = null;
    availableEmployees: Employee[] = [];
    model: string = '';
    teamChangedSubscription: EventEmitter<Team> = new EventEmitter();
    sortType: string = 'id';
    sortReverse: boolean = false;
    constructor(private teamsService: TeamsService, private employeesService: EmployeesService) { }

    addMember(employee: Employee) {
        this.currentTeam.members.push(employee);
        this.availableEmployees.splice(this.availableEmployees.indexOf(employee), 1);
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

    private initEmployeesSets() {
        this.availableEmployees = this.employeesService.getAvailableEmployees(this.currentTeam.members);
        for(let i in this.availableEmployees){
            this.availableEmployees[i]['hidden'] = true;
        }
    }
}