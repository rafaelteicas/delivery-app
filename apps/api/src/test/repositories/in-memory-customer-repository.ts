import { Customer } from "@/domain/customer/entities/customer";
import { CustomerRepository } from "@/domain/customer/repositories/customer-repository";

export class InMemoryCustomerRepository implements CustomerRepository {
  public items: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.items.push(customer);
  }

  async getById(customerId: string): Promise<Customer | null> {
    const customer = this.items.find((customer) => customer.id === customerId);

    if (!customer) {
      return null;
    }

    return customer;
  }

  async findByEmail(email: string): Promise<Customer | null> {
    const customer = this.items.find((customer) => customer.email === email);

    if (!customer) {
      return null;
    }

    return customer;
  }
}
