import { Router } from "express";

import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";
import { GetTeacherController } from "../modules/teacher/useCases/getTeacher/GetTeacherController";
import { LoginTeacherController } from "../modules/teacher/useCases/loginTeacher/LoginUserController";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();
const getTeacherController = new GetTeacherController();
const loginTeacherController = new LoginTeacherController();

teachersRoutes.post("/", createTeacherControler.handle);
teachersRoutes.get("/", getTeacherController.handle);
teachersRoutes.post("/login", loginTeacherController.handle);

export { teachersRoutes };
