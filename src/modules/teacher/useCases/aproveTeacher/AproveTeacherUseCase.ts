import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class AproveTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) { }

  async execute(id: string): Promise<Teacher> {
    try {
      const teacher = await this.teacherRepository.findById(id);

      if (!teacher) {
        throw new AppError("teacher not found", 404);
      }

      teacher.isApproved = !teacher.isApproved;

      await this.teacherRepository.update(id, teacher);

      const teacherUpdated = await this.teacherRepository.findById(id);

      return teacherUpdated;
    } catch (e) {
      return e;
    }
  }
}

export { AproveTeacherUseCase };
