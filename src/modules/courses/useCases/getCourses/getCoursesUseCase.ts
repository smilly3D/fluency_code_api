import { inject, injectable } from "tsyringe";

import { Courses } from "../../entities/Courses";
import { ICoursesRepositories } from "../../repositories/ICoursesRepositories";

@injectable()
class GetCoursesUseCase {
  constructor(
    @inject("CoursesRepositories")
    private coursesRepositories: ICoursesRepositories
  ) { }

  execute(): Promise<Courses[]> {
    const student = this.coursesRepositories.list();
    return student;
  }
}

export { GetCoursesUseCase };
