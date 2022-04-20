import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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
      throw new AppError("User already exists", 409);
    }
    const cpfAlreadyExists = await this.teacherRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new AppError("CPF already exists");
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
