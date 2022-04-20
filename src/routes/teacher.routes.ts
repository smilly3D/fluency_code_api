import { Router } from "express";

import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();

teachersRoutes.post("/", createTeacherControler.handle);

export { teachersRoutes };
