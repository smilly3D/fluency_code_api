import { inject, injectable } from "tsyringe";

import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
class GetStudentUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}

  execute(): Promise<Students[]> {
    const student = this.studentsRepositories.list();
    return student;
  }
}

export { GetStudentUseCase };
