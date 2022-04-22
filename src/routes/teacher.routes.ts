import { Router } from "express";

import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";
import { LoginTeacherController } from "../modules/teacher/useCases/loginTeacher/LoginUserController";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();
const loginTeacherController = new LoginTeacherController();

teachersRoutes.post("/", createTeacherControler.handle);
teachersRoutes.post("/login", loginTeacherController.handle);

export { teachersRoutes };
