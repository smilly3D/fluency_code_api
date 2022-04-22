import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { JWT_CONFIG } from "../../../../configs";
import { AppError } from "../../../../errors/AppError";
import { ILoginTeacherDTO } from "../../dtos/ILoginTeacherDTO";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class LoginTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}
  async execute({
    email,
    password,
  }: ILoginTeacherDTO): Promise<string | Error> {
    const teacher = await this.teacherRepository.findByEmail(email);

    if (!teacher) {
      throw new AppError("User already exists", 404);
    }

    const hasedPassword = await bcrypt.compare(password, teacher.password);

    if (!hasedPassword) {
      throw new AppError("Invalid Password");
    }
    const { id } = teacher;
    const accessToken = jwt.sign({ id }, JWT_CONFIG.SECRET_KEY, {
      expiresIn: JWT_CONFIG.EXPIRES_IN,
    });

    return accessToken;
  }
}

export { LoginTeacherUseCase };
