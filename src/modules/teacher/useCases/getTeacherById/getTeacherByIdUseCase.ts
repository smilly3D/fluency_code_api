import { inject, injectable } from "tsyringe";

import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class GetTeacherByIdUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}

  execute(id): Promise<Teacher> {
    const teacher = this.teacherRepository.findById(id);
    return teacher;
  }
}

export { GetTeacherByIdUseCase };
