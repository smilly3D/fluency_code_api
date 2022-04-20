import { container } from "tsyringe";

import { IAdminRepository } from "../../modules/admin/repositories/IAdminRepository";
import { AdminRepository } from "../../modules/admin/repositories/implementations/AdminRepository";
import { StudentsRepositories } from "../../modules/students/repositories/implementions/studentsRepositories";
import { IStudentsRepositories } from "../../modules/students/repositories/IStudentsRepositories";
import { TeacherRepository } from "../../modules/teacher/repositories/implementations/TeacherRepository";
import { ITeacherRepository } from "../../modules/teacher/repositories/ITeachRepository";

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
