import {IPerson, Person} from "./person";

export interface ILawyer extends IPerson {
  practiceAreas: Array<string>;
  accreditationStatus;
  salary: string;
}

export class Lawyer extends Person implements ILawyer {

    practiceAreas: Array<string>;
    accreditationStatus;
  salary: string;

  constructor(
    lawyerObj: ILawyer
  ) {
    super(lawyerObj);

    lawyerObj.practiceAreas ? this.practiceAreas = lawyerObj.practiceAreas : this.practiceAreas = null;
    lawyerObj.salary ? this.salary = lawyerObj.salary : this.salary = null;
  }


}
