import { ICreateCourseDTO } from "../dtos/ICreateCourseDTO";
import { Courses } from "../entities/Courses";

export interface ICoursesRepositories {
  findById(id: string): Promise<Courses>;
  list(): Promise<Courses[]>;
  create: (student: ICreateCourseDTO) => Promise<string | Error>;
}
