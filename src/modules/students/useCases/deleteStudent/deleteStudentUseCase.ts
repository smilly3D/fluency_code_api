import { inject, injectable } from "tsyringe";

import { Students } from "../../entities/Student";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
class DeleteStudentUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) { }

  execute(id: string): Promise<Students> {
    const student = this.studentsRepositories.findById(id);
    return student;
  }
}

export { DeleteStudentUseCase };
