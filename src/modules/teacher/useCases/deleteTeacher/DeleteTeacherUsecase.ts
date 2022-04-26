import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class DeleteTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}
  async execute(id: string): Promise<string | Error> {
    const teacher = await this.teacherRepository.findById(id);
    if (!teacher) {
      throw new AppError("User already exists", 404);
    }
    return "Teacher deleted with success";
  }
}

export { DeleteTeacherUseCase };
