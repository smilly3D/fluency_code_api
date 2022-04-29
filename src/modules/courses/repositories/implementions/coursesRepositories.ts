import { getRepository, Repository } from "typeorm";

import { ICreateCourseDTO } from "../../dtos/ICreateCourseDTO";
import { Courses } from "../../entities/Courses";
import { ICoursesRepositories } from "../ICoursesRepositories";

export class CoursesRepositories implements ICoursesRepositories {
  private repository: Repository<Courses>;

  constructor() {
    this.repository = getRepository(Courses);
  }

  async findById(id: string): Promise<Courses> {
    const course = await this.repository.findOne(id);
    return course;
  }

  async list(): Promise<Courses[]> {
    return this.repository.find();
  }

  async create(course: ICreateCourseDTO): Promise<string | Error> {
    const repo = this.repository;

    const courseCreate = repo.create(course);

    await repo.save(courseCreate);

    return "Course created successfully";
  }
}
