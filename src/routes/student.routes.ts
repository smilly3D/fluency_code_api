import { Router } from "express";

import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

studentsRouter.post(
  "/register",
  validateMiddleware(registerSchema),
  new CreateStudentsController().handle
);

export { studentsRouter };
