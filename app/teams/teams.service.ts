import { Injectable, EventEmitter } from '@angular/core';
import { Team } from './helper-classes/team';
import { Employee } from '../employees/helper-classes/employee';

@Injectable()
export class TeamsService {
    teamChanged$: EventEmitter<Team>;
    private teams: Team[] = [];
    private currentTeam: Team = new Team('');

    constructor() {
        this.teamChanged$ = new EventEmitter();
    }

    createNewTeam(): Team {
        return new Team('');
    }

    getTeams(): Team[] {
        return this.teams;
    }

    getCurrentTeam(): Team {
        return this.currentTeam;
    }

    checkIfNameIsTaken(name: string): boolean {
        let nameTaken: boolean = false;
        for (let index in this.teams) {
            if (this.teams[index].name.toLowerCase() === name.toLowerCase()) {
                nameTaken = true;
                break;
            }
        }
        return nameTaken;
    }

    addTeam(team: Team): void {
        this.teams.push(team);
    }

    changeCurrentTeam(panelId: string, state: boolean): void {
        let index: number = parseInt(panelId);
        let activeTeam: Team = new Team('');
        if (state === true) {
            for (let i in this.teams) {
                if (this.teams[i].isOpen === true) {
                    this.teams[i].isOpen = false;
                    break;
                }
            }
            this.teams[index].isOpen = state;
            activeTeam = this.teams[index];
        }
        else {
            this.teams[index].isOpen = state;
        }
        for (let prop in activeTeam) {
            this.currentTeam[prop] = activeTeam[prop];
        }
        this.teamChanged$.emit();
    }

    refreshCurrentTeam(employees: Employee[]) {
        this.currentTeam.members.length = 0;
        for (let i in employees) {
            this.currentTeam.members.push(employees[i]);
        }
    }

    removeMember(member: Employee){
        this.currentTeam.members.splice(this.currentTeam.members.indexOf(member), 1);
        this.teamChanged$.emit();
    }
}