import { container } from "tsyringe";

import { TeacherRepository } from "../../modules/teacher/repositories/implementations/TeacherRepository";
import { ITeacherRepository } from "../../modules/teacher/repositories/ITeachRepository";

container.registerSingleton<ITeacherRepository>(
  "TeacherRepository",
  TeacherRepository
);
