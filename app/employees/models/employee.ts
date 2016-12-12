export class Employee {
    id: number;
    name: string;
    age: number;
    grade: string;
    job: string;
    constructor(id: number, name: string, age: number, grade: string, job: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.job = job;
    }
}