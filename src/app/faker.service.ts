import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {IPerson, Person} from './entities/person';
import {ITeacher, Teacher} from './entities/teacher';

import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakerService {

  numberOfPeopleToGenerate = 10;
  peopleList: Array<IPerson> = [];
  teacherList: Array<ITeacher> = [];

  static generatePerson(): IPerson {
    return new Person({
      id: faker.random.uuid(),
      type: 'Person',

      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      jobTitle: faker.name.jobTitle(),
      jobDescription: faker.name.jobDescriptor(),
      phoneNumber: faker.phone.phoneNumber(),
      email: faker.internet.email(),

      dateAdded: faker.date.past(),
      dateModified: faker.date.past()
    });
  }

  static generateTeacher(): ITeacher {
    return new Teacher({
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
    });
  }

  constructor() {
    for (let i = 0; i < this.numberOfPeopleToGenerate; i++) {
      this.peopleList.push(FakerService.generatePerson());
      this.teacherList.push(FakerService.generateTeacher());
    }

    const $pplList = of(this.peopleList);
    $pplList
    .subscribe((data) => {
      console.log(data);
    });

    console.groupCollapsed('Generated Data ====================');
    console.log('People entities: ');
    console.table(this.peopleList);
    console.log('Teacher entities: ');
    console.table(this.teacherList);
    console.groupEnd();
  }
}
