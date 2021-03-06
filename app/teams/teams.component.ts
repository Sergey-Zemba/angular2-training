import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { Team } from './models/team';
import { TeamsService } from './teams.service';
import { Employee } from '../employees/models/employee';

@Component({
    selector: 'teams',
    templateUrl: 'app/teams/teams.template.html',
    styleUrls: ['app/teams/teams.css']
})

export class TeamsComponent implements OnInit {
    newTeam: Team = null;
    teams: Team[] = [];
    currentTeam: Team = null;;
    nameIsTaken: boolean = false;
    constructor(private teamsService: TeamsService) { };
    checkIfNameIsTaken(): void {
        if (this.newTeam.name) {
            this.nameIsTaken = this.teamsService.checkIfNameIsTaken(this.newTeam.name);
        }
    }

    addTeam(): void {
        this.teamsService.addTeam(this.newTeam);
        this.newTeam = this.teamsService.createNewTeam();
    }

    setCurrentTeam($event: NgbPanelChangeEvent): void {
        this.teamsService.changeCurrentTeam($event.panelId, $event.nextState);
    }

    removeMember(member: Employee){
        this.teamsService.removeMember(member);
    }

    ngOnInit() {
        this.newTeam = this.teamsService.createNewTeam();
        this.teams = this.teamsService.teams;
        this.currentTeam = this.teamsService.currentTeam;
    }
}