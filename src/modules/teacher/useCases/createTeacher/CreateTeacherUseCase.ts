import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateTeacherDTO } from "../../dtos/ICreateTeacherDTO";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class CreateTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}
  async execute({
    biography,
    cpf,
    email,
    github,
    hour,
    name,
    password,
    phone,
    photo_url,
    description,
  }: ICreateTeacherDTO): Promise<void> {
    const teacherAlreadyExists = await this.teacherRepository.findByEmail(
      email
    );

    if (teacherAlreadyExists) {
      throw new Error("Teacher already exists");
    }

    const passwordHash = await hash(password, 8);

    this.teacherRepository.create({
      biography,
      cpf,
      email,
      github,
      hour,
      name,
      password: passwordHash,
      phone,
      photo_url,
      description,
    });
  }
}

export { CreateTeacherUseCase };
