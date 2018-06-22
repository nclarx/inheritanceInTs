import {Base} from "./base";

export interface IPerson extends Base {
  firstName: string;
  lastName: string;
  jobTitle: string;
  jobDescription: string;
  phoneNumber: string;
  email: string;
}

export class Person extends Base implements IPerson {
  firstName: string;
  lastName: string;
  jobTitle: string;
  jobDescription: string;
  phoneNumber: string;
  email: string;

  constructor(
    personsObj: IPerson
  ) {
    super(
      personsObj.id,
      personsObj.type,
      personsObj.dateAdded,
      personsObj.dateModified);

    personsObj.firstName ? this.firstName = personsObj.firstName : this.firstName = null;
    personsObj.lastName ? this.lastName = personsObj.lastName : this.lastName = null;
    personsObj.jobTitle ? this.jobTitle = personsObj.jobTitle : this.jobTitle = null;
    personsObj.jobDescription ? this.jobDescription = personsObj.jobDescription : this.jobDescription = null;
    personsObj.phoneNumber ? this.phoneNumber = personsObj.phoneNumber : this.phoneNumber = null;
    personsObj.email ? this.email = personsObj.email : this.email = null;
  }
}
