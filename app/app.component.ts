import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams/teams.service';
import { Team } from './teams/models/team';

@Component({
    selector: 'teams-app',
    templateUrl: 'app/app.template.html'
})

export class AppComponent implements OnInit {
    currentTeam: Team = null;
    constructor(private teamsService: TeamsService) { }

    ngOnInit(){
        this.currentTeam = this.teamsService.currentTeam;
    }
}