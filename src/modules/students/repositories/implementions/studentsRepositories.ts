import { getRepository } from "typeorm";

import { ICreateStudents } from "../../@types";
import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../IStudentsRepositories";

export class StudentsRepositories implements IStudentsRepositories {
  async create(student: ICreateStudents): Promise<string | Error> {
    const repo = getRepository(Students);

    const { email, name, password } = student;

    if (await repo.findOne({ email })) {
      return new Error("E-mail already registered");
    }

    const studentCreate = repo.create({ email, name, password });

    await repo.save(studentCreate);

    return "User created successfully";
  }
}
