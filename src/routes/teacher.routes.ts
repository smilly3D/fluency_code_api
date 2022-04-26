import { Router } from "express";
import { validateMiddleware } from "../middlewares/validateMiddleware";

import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";
import { DeleteTeacherController } from "../modules/teacher/useCases/deleteTeacher/DeleteTeacherControler";
import { GetTeacherController } from "../modules/teacher/useCases/getTeacher/GetTeacherController";
import { LoginTeacherController } from "../modules/teacher/useCases/loginTeacher/LoginUserController";
import { loginSchema, registerTeacherSchema } from "../schemas";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();
const getTeacherController = new GetTeacherController();
const loginTeacherController = new LoginTeacherController();
const deleteTeacherController = new DeleteTeacherController();

teachersRoutes.get("/", getTeacherController.handle);
teachersRoutes.post("/", validateMiddleware(registerTeacherSchema), createTeacherControler.handle);
teachersRoutes.post("/login", validateMiddleware(loginSchema), loginTeacherController.handle);
teachersRoutes.delete("/:id?", deleteTeacherController.handle);

export { teachersRoutes };
