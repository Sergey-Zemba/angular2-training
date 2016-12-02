import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams/teams.service';
import { Team } from './teams/helper-classes/team';

@Component({
    selector: 'teams-app',
    templateUrl: 'app/app.template.html',
    providers: [TeamsService]
})

export class AppComponent implements OnInit {
    currentTeam: Team = null;
    constructor(private teamsService: TeamsService) { }

    ngOnInit(){
        this.currentTeam = this.teamsService.getCurrentTeam();
    }
}