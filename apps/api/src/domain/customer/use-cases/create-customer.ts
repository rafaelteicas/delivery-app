import { Either, left, right } from "@/core/protocols";
import { Customer } from "../entities/customer";
import { CustomerRepository } from "../repositories/customer-repository";
import { UserAlreadyExistsError } from "@/core/errors";

type CreateCustomerUseCaseRequest = {
  fullName: string;
  email: string;
  password: string;
};

type CreateCustomerUseCaseResponse = Either<
  UserAlreadyExistsError,
  { customer: Customer }
>;

export class CreateCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute({
    email,
    fullName,
    password,
  }: CreateCustomerUseCaseRequest): Promise<CreateCustomerUseCaseResponse> {
    const customerAlreadyExists = await this.customerRepository.findByEmail(
      email
    );

    if (customerAlreadyExists) {
      return left(new UserAlreadyExistsError());
    }

    const customer = Customer.create({
      email,
      fullName,
      password,
    });

    await this.customerRepository.create(customer);

    return right({ customer });
  }
}
