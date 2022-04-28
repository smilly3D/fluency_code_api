import { getRepository, Repository } from "typeorm";

import { ICreateTeacherDTO } from "../../dtos/ICreateTeacherDTO";
import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../ITeachRepository";

class TeacherRepository implements ITeacherRepository {
  private repository: Repository<Teacher>;

  constructor() {
    this.repository = getRepository(Teacher);
  }

  async create({
    biography,
    cpf,
    email,
    github,
    hour,
    name,
    password,
    phone,
    photo_url,
  }: ICreateTeacherDTO): Promise<void> {
    const teacher = this.repository.create({
      biography,
      cpf,
      email,
      github,
      hour,
      name,
      password,
      phone,
      photo_url,
    });

    await this.repository.save(teacher);
  }
  async findByEmail(email: string): Promise<Teacher> {
    const teacher = await this.repository.findOne({ email });
    return teacher;
  }
  async findById(id: string): Promise<Teacher> {
    const teacher = await this.repository.findOne(id);
    return teacher;
  }

  async findByCPF(cpf: string): Promise<Teacher> {
    const teacher = await this.repository.findOne({ cpf });
    return teacher;
  }

  async list(): Promise<Teacher[]> {
    return this.repository.find();
  }

  async delete(teacher: Teacher): Promise<void> {
    await this.repository.remove(teacher);
  }

  async update(teacher_id: string, data: unknown): Promise<void> {
    await this.repository.update(teacher_id, data);
  }
}

export { TeacherRepository };
