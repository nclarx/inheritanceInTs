import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {IPerson, Person} from "./entities/person";
import {Teacher} from "./entities/teacher";

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  numberOfPeopleToGenerate: number = 10;
  peopleList: Array<IPerson> = [];
  teacherList: Array<any> = [];

  constructor() {
    for (let i = 0; i < this.numberOfPeopleToGenerate; i++) {
      this.peopleList.push(new Person(this.generatePerson()));
      this.teacherList.push(new Teacher(this.generateTeacher()));
    }
    console.groupCollapsed('Generated Data ====================');
    console.log('People List: ', this.peopleList);
    console.log('Teacher List: ', this.teacherList);
    console.groupEnd();
  }

  generatePerson(): IPerson {
    return {
      id: undefined, // faker.random.uuid(),
      type: 'Person',

      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      jobDescription: faker.name.jobDescriptor(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),

      dateAdded: faker.date.past(),
      dateModified: faker.date.past()
    }
  }

  generateTeacher(): any {
    return {
      id: faker.random.uuid(),
      type: 'Teacher',

      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      jobDescription: faker.name.jobDescriptor(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),

      teachingAreas: [faker.name.jobArea(), faker.name.jobArea()],
      salary: faker.finance.amount(55000, 80000, 2, '$'),

      dateAdded: faker.date.past(),
      dateModified: faker.date.past()
    }
  }
}
