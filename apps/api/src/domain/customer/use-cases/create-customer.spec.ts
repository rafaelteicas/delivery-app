import { InMemoryCustomerRepository } from "@/test/repositories/in-memory-customer-repository";
import { CreateCustomerUseCase } from "./create-customer";
import { Right } from "@/core/protocols";
import { UserAlreadyExistsError } from "@/core/errors";

let inMemoryCustomerRepository = new InMemoryCustomerRepository();
let sut: CreateCustomerUseCase;

describe("Customer Use Case", () => {
  beforeEach(() => {
    inMemoryCustomerRepository = new InMemoryCustomerRepository();
    sut = new CreateCustomerUseCase(inMemoryCustomerRepository);
  });
  it("should be able to create a new customer", async () => {
    const result = await sut.execute({
      email: "any_mail@mail.com",
      fullName: "Full name",
      password: "123456",
    });

    expect(result.isRight()).toBeTruthy();
    expect(result.value).toStrictEqual({
      customer: inMemoryCustomerRepository.items[0],
    });
  });
  it("should throw if user already exists", async () => {
    await sut.execute({
      email: "any_mail@mail.com",
      fullName: "Full name",
      password: "123456",
    });
    const result = await sut.execute({
      email: "any_mail@mail.com",
      fullName: "Full name",
      password: "123456",
    });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toBeInstanceOf(UserAlreadyExistsError);
  });
});
