import { inject, injectable } from "tsyringe";

import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
class DeleteStudentUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) { }

  execute(): Promise<Students[]> {
    const student = this.studentsRepositories.delete();
    return student;
  }
}

export { DeleteStudentUseCase };
