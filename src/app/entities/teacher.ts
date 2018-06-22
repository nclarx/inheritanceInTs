import {IPerson, Person} from "./person";

export interface ITeacher extends IPerson {
  teachingAreas: Array<string>;
  salary: string;
}

export class Teacher extends Person implements ITeacher {

  teachingAreas: Array<string>;
  salary: string;

  constructor(
    teacherObj: ITeacher
  ) {
    super(teacherObj);

    teacherObj.teachingAreas ? this.teachingAreas = teacherObj.teachingAreas : this.teachingAreas = null;
    teacherObj.salary ? this.salary = teacherObj.salary : this.salary = null;
  }


}
