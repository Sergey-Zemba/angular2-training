import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/throw';
import { Employee } from './models/employee';

@Injectable()
export class EmployeesService {
    private allEmployees: Employee[] = [];
    constructor(private http: Http) { }
    getAllEmployees(): Observable<Employee[]> {
        return this.http.get('https://raw.githubusercontent.com/javascript-awesome/angular-911/master/datasources/staff.json')
            .map((resp: Response) => { this.allEmployees = resp.json(); })
            .publishReplay(1)
            .refCount()
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getAvailableEmployees(takenEmployees: Employee[]): Employee[] {
        let availableEmployees: Employee[] = Array.from(this.allEmployees);
        for (let index in takenEmployees) {
            availableEmployees = availableEmployees.filter(e => e.id !==  takenEmployees[index].id);
        }
        return availableEmployees;
    }
}