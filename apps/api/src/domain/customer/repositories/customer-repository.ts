import { Customer } from "../entities/customer";

export interface CustomerRepository {
  create: (customer: Customer) => Promise<void>;
  getById: (customerId: string) => Promise<Customer | null>;
  findByEmail: (email: string) => Promise<Customer | null>;
}
