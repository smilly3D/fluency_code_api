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
      throw new AppError("Teacher not exists", 404);
    }

    await this.teacherRepository.delete(teacher);

    return "Teacher deleted with success";
  }
}

export { DeleteTeacherUseCase };
