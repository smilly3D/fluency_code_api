import { Router } from "express";

import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";
import { GetTeacherController } from "../modules/teacher/useCases/getTeacher/GetTeacherController";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();
const getTeacherController = new GetTeacherController();

teachersRoutes.post("/", createTeacherControler.handle);
teachersRoutes.get("/", getTeacherController.handle);

export { teachersRoutes };
