import { Component } from '@angular/core';
import { TeamsService } from '../../teams/teams.service';
import { Employee } from '../helper-classes/employee';
import { EmployeesService } from '../employees.service';
import { TabComponent } from './tab.component';

@Component({
    selector: 'tab2',
    templateUrl: 'app/employees/tabs/tab2.template.html',
    styleUrls: ['app/employees/tabs/tab2.css'],
    providers: [EmployeesService]
})

export class Tab2Component extends TabComponent {
    sortType: string = 'id';
    sortReverse: boolean = false;
    constructor(teamsService: TeamsService, employeesService: EmployeesService) { super(teamsService, employeesService); }

    initEmployeesSets() {
        this.availableEmployees = this.employeesService.getAvailableEmployees(this.currentTeam.members);
        for(let i in this.availableEmployees){
            this.availableEmployees[i]['hidden'] = true;
        }
    }

    addMember(employee: Employee) {
        this.currentTeam.members.push(employee);
        this.availableEmployees.splice(this.availableEmployees.indexOf(employee), 1);
    }
}