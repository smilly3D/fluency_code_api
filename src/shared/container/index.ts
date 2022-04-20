import { container } from "tsyringe";

import { StudentsRepositories } from "../../modules/students/repositories/implementions/studentsRepositories";
import { IStudentsRepositories } from "../../modules/students/repositories/IStudentsRepositories";
import { TeacherRepository } from "../../modules/teacher/repositories/implementations/TeacherRepository";
import { ITeacherRepository } from "../../modules/teacher/repositories/ITeachRepository";

container.registerSingleton<IStudentsRepositories>(
  "StudentsRepositories",
  StudentsRepositories
);

container.registerSingleton<ITeacherRepository>(
  "TeacherRepository",
  TeacherRepository
);
