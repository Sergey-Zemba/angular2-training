import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { TeamsService } from '../../teams/teams.service';
import { EmployeesService } from '../employees.service';
import { Team } from '../../teams/helper-classes/team';
import { Employee } from '../helper-classes/employee';

export abstract class TabComponent implements OnInit, OnDestroy {
    currentTeam: Team = null;
    availableEmployees: Employee[] = [];
    model: string = '';
    teamChangedSubscription: EventEmitter<Team> = new EventEmitter();
    constructor(protected teamsService: TeamsService, protected employeesService: EmployeesService) { }

    abstract initEmployeesSets();

    onTeamChanged() {
        this.initEmployeesSets();
    }

    ngOnInit() {
        this.currentTeam = this.teamsService.getCurrentTeam();
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
        this.teamChangedSubscription = this.teamsService.teamChanged$.subscribe(() => this.onTeamChanged());
    }

    ngOnDestroy() {
        this.teamChangedSubscription.unsubscribe();
    }
}