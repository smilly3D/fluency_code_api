import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
export class DeleteStudentProfileUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}
  async execute(id: string): Promise<string | Error> {
    const student = await this.studentsRepositories.findById(id);

    if (!student) {
      throw new AppError("Student not exists", 404);
    }

    await this.studentsRepositories.delete(student);
    return "Student deleted with success";
  }
}
