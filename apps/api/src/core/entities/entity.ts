import { randomUUID } from "node:crypto";

export abstract class Entity<T> {
  protected props: T;
  private _id: string;

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }

  get id() {
    return this._id;
  }
}
