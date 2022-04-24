import { inject, injectable } from "tsyringe";

import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class GetTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) { }

  execute(): Promise<Teacher[]> {
    const teacher = this.teacherRepository.list();

    return teacher;
  }
}

export { GetTeacherUseCase };
