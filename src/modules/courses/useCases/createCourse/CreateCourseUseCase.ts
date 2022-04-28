import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { CoursesRepositories } from "../../repositories/implementions/coursesRepositories";

@injectable()
class CreateAdminUseCase {
  constructor(
    @inject("CoursesRepositories")
    private coursesRepositories: CoursesRepositories
  ) { }
  async execute({
    name,
    photo_url,
    description,
    content_id,
    knowledge,
    price,
    students_total,
    teacher_id,
    trainingFor,
  }: ICreateCourseDTO): Promise<void> {
    this.coursesRepositories.create({
      name,
      photo_url,
      description,
      content_id,
      knowledge,
      price,
      students_total,
      teacher_id,
      trainingFor,
    });
  }

export { CreateAdminUseCase };
