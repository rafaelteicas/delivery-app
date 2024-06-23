import { Entity } from "@/core/entities/entity";

type CustomerProps = {
  fullName: string;
  email: string;
  password: string;
};

export class Customer extends Entity<CustomerProps> {
  get fullName(): string {
    return this.props.fullName;
  }

  set fullName(fullName: string) {
    this.props.fullName = fullName;
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.fullName = email;
  }

  set password(password: string) {
    this.props.fullName = password;
  }

  static create(props: CustomerProps, id?: string) {
    const customer = new Customer(props, id);
    return customer;
  }
}
