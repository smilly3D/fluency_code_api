import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { JWT_CONFIG } from "../../../../configs";
import { AppError } from "../../../../errors/AppError";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";
import { ILoginStudentsDTO } from "./loginStudentsDTO";

@injectable()
class LoginStudentUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}
  async execute({
    email,
    password,
  }: ILoginStudentsDTO): Promise<string | Error> {
    const student = await this.studentsRepositories.findByEmail(email);

    if (!student) {
      throw new AppError("User not exists!", 404);
    }

    const hasedPassword = await bcrypt.compare(password, student.password);

    if (!hasedPassword) {
      throw new AppError("Invalid Password");
    }

    const accessToken = jwt.sign({ type: "students" }, JWT_CONFIG.SECRET_KEY, {
      expiresIn: JWT_CONFIG.EXPIRES_IN,
      subject: student.id,
    });

    return accessToken;
  }
}

export { LoginStudentUseCase };
