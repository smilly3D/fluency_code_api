import { getRepository, Repository } from "typeorm";

import { ICreateStudents } from "../../@types";
import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../IStudentsRepositories";

export class StudentsRepositories implements IStudentsRepositories {
  private repository: Repository<Students>;

  constructor() {
    this.repository = getRepository(Students);
  }

  async create(student: ICreateStudents): Promise<string | Error> {
    const repo = this.repository;

    const { email, name, password } = student;

    if (await repo.findOne({ email })) {
      return new Error("E-mail already registered");
    }

    const studentCreate = repo.create({ email, name, password });

    await repo.save(studentCreate);

    return "User created successfully";
  }

  async findById(id: string): Promise<Students> {
    const student = await this.repository.findOne(id);
    return student;
  }

  async findByEmail(email: string): Promise<Students> {
    const student = await this.repository.findOne({ where: { email } });
    return student;
  }

  async findByCPF(cpf: string): Promise<Students> {
    const student = await this.repository.findOne({ where: { cpf } });
    return student;
  }

  async list(): Promise<Students[]> {
    return this.repository.find();
  }

  async updatePhoto(user_id: string, photo: string): Promise<void> {
    const repo = getRepository(Students);

    const user = await repo.findOne({ id: user_id });

    user.photo_url = photo;
    user.updatedOn = new Date();

    await repo.save(user);
  }

  async delete(user_id: string): Promise<Students> {
    const student = await this.repository.findOne({ id: user_id });
    const deleteStudent = await this.repository.delete(student);
    return deleteStudent;
  }
}
