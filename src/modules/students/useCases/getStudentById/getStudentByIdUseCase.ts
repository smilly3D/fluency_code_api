import { inject, injectable } from "tsyringe";

import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
class GetStudentByIdUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}

  execute(id): Promise<Students> {
    const student = this.studentsRepositories.findById(id);
    return student;
  }
}

export { GetStudentByIdUseCase };
