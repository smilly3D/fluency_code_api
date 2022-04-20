import { Router } from "express";

import { validateMiddlewere } from "../middleweres/validateMiddlewere";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

studentsRouter.post(
  "/register",
  validateMiddlewere(registerSchema),
  new CreateStudentsController().handle
);

export { studentsRouter };
