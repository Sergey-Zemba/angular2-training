import { Employee } from '../../employees/helper-classes/employee';

export class Team {
    name: string;
    members: Employee[];
    isOpen: boolean;
    constructor(name: string) {
        this.name = name;
        this.members = new Array<Employee>();
        this.isOpen =  false;
    }
}