import bcrypt from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";
import { ICreateStudentsDTO } from "./createStudentsDTO";

@injectable()
export class CreateStudentsUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}

  async execute({
    name,
    email,
    password,
  }: ICreateStudentsDTO): Promise<string | Error> {
    const passwordHash = await bcrypt.hash(password, 10);

    const student = await this.studentsRepositories.create({
      name,
      email,
      password: passwordHash,
    });

    return student;
  }
}
