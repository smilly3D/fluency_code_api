import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Teacher } from "../../entities/Teacher";
import { ITeacherRepository } from "../../repositories/ITeachRepository";

@injectable()
class UpdateTeacherUseCase {
  constructor(
    @inject("TeacherRepository")
    private teacherRepository: ITeacherRepository
  ) {}
  async execute(id, data): Promise<Teacher> {
    try {
      const teacher = await this.teacherRepository.findById(id);

      if (!teacher) {
        throw new AppError("teacher not found");
      }

      teacher.password = data.password
        ? await hash(data.password, 10)
        : teacher.password;
      teacher.cpf = data.cpf ? data.cpf : teacher.cpf;
      teacher.name = data.name ? data.name : teacher.name;
      teacher.email = data.email ? data.email : teacher.email;
      teacher.phone = data.phone ? data.phone : teacher.phone;
      teacher.biography = data.biography ? data.biography : teacher.biography;
      teacher.description = data.description
        ? data.description
        : teacher.description;
      teacher.github = data.github ? data.github : teacher.github;
      teacher.hour = data.hour ? data.hour : teacher.hour;

      await this.teacherRepository.update(id, teacher);

      const teacherUpdated = await this.teacherRepository.findById(id);

      return teacherUpdated;
    } catch (e) {
      return e;
    }
  }
}

export { UpdateTeacherUseCase };
