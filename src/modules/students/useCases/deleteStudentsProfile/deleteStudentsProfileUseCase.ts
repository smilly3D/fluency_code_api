import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
export class DeleteStudentProfileUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}
  async execute(token: string): Promise<string | Error> {
    const decodedUser: any = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (_err, decoded) => {
        return decoded;
      }
    );
    const student = await this.studentsRepositories.findById(decodedUser.id);

    if (!student) {
      throw new AppError("Student not exists", 404);
    }
    await this.studentsRepositories.delete(student);
    return "Student deleted with success";
  }
}
