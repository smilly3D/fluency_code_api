import { container } from "tsyringe";

import { IAdminRepository } from "../../modules/admin/repositories/IAdminRepository";
import { AdminRepository } from "../../modules/admin/repositories/implementations/AdminRepository";
import { ICoursesRepositories } from "../../modules/courses/repositories/ICoursesRepositories";
import { CoursesRepositories } from "../../modules/courses/repositories/implementions/coursesRepositories";
import { StudentsRepositories } from "../../modules/students/repositories/implementions/studentsRepositories";
import { IStudentsRepositories } from "../../modules/students/repositories/IStudentsRepositories";
import { TeacherRepository } from "../../modules/teacher/repositories/implementations/TeacherRepository";
import { ITeacherRepository } from "../../modules/teacher/repositories/ITeachRepository";
import { S3Provider } from "../providers/S3Storage/implementions/S3Provider";
import { IS3Provider } from "../providers/S3Storage/IS3Provider";

container.registerSingleton<IAdminRepository>(
  "AdminRepository",
  AdminRepository
);

container.registerSingleton<IStudentsRepositories>(
  "StudentsRepositories",
  StudentsRepositories
);

container.registerSingleton<ITeacherRepository>(
  "TeacherRepository",
  TeacherRepository
);

container.registerSingleton<ICoursesRepositories>(
  "CoursesRepositories",
  CoursesRepositories
);

container.registerSingleton<IS3Provider>("S3Provider", S3Provider);
