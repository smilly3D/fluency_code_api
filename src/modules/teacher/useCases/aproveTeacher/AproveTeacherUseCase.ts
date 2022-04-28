import { inject, injectable } from "tsyringe";

import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class AproveTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}

  async execute(id, data): Promise<Teacher> {
    try {
      const teacher = await this.teacherRepository.findById(id);

      if (!teacher) {
        throw new Error("teacher not found");
      }

      teacher.isApproved = data.isApproved
        ? data.isApproved
        : teacher.isApproved;

      await this.teacherRepository.update(id, teacher);

      const teacherUpdated = await this.teacherRepository.findById(id);

      return teacherUpdated;
    } catch (e) {
      return e;
    }
  }
}

export { AproveTeacherUseCase };
