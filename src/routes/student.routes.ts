import { Router } from "express";

import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { GetStudentController } from "../modules/students/useCases/getStudent/getStudentController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

const getStudentController = new GetStudentController();

studentsRouter.post(
  "/register",
  validateMiddleware(registerSchema),
  new CreateStudentsController().handle
);

studentsRouter.get("/", getStudentController.handle);

export { studentsRouter };
