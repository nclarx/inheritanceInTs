export abstract class Base {
  protected constructor(
    public id: string,
    public type: string,
    public dateAdded: Date,
    public dateModified: Date
  ) {
  }
}
