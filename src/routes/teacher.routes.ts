import { Router } from "express";

import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { AproveTeacherController } from "../modules/teacher/useCases/aproveTeacher/AproveTeacherController";
import { CreateTeacherController } from "../modules/teacher/useCases/createTeacher/CreateUserController";
import { DeleteTeacherController } from "../modules/teacher/useCases/deleteTeacher/DeleteTeacherController";
import { GetTeacherController } from "../modules/teacher/useCases/getTeacher/GetTeacherController";
import { GetTeacherByIdController } from "../modules/teacher/useCases/getTeacherById/getTeacherByIdController";
import { LoginTeacherController } from "../modules/teacher/useCases/loginTeacher/LoginUserController";
import { UpdateTeacherController } from "../modules/teacher/useCases/updateTeacher/UpdateTeacherController";
import { loginSchema, registerTeacherSchema } from "../schemas";

const teachersRoutes = Router();

const createTeacherControler = new CreateTeacherController();
const getTeacherController = new GetTeacherController();
const loginTeacherController = new LoginTeacherController();
const deleteTeacherController = new DeleteTeacherController();
const getTeacherByIdController = new GetTeacherByIdController();
const updateTeacherController = new UpdateTeacherController();
const aproveTeacherController = new AproveTeacherController();

teachersRoutes.get("/", authenticate(["admin", "teacher", "student"]), getTeacherController.handle);
teachersRoutes.get("/:id", authenticate(["admin", "teacher", "student"]), getTeacherByIdController.handle);

teachersRoutes.post("/", validateMiddleware(registerTeacherSchema), createTeacherControler.handle);
teachersRoutes.post("/login", validateMiddleware(loginSchema), loginTeacherController.handle);

teachersRoutes.delete("/:id", deleteTeacherController.handle);

teachersRoutes.patch("/:teacher_id", updateTeacherController.handle);
teachersRoutes.patch("/aprove/:teacher_id", aproveTeacherController.handle);

export { teachersRoutes };
