import { Router } from "express";
import multer from "multer";

import multerConfig from "../configs/multer/multerConfig";
import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { GetStudentController } from "../modules/students/useCases/getStudent/getStudentController";
import { LoginStudentController } from "../modules/students/useCases/loginStudents/loginStudentsController";
import { UpdatePhotoStudentsController } from "../modules/students/useCases/updatePhotoStudents/updatePhotoStudentsController";
import { UpdateStudentsController } from "../modules/students/useCases/updateStudents/updateStudentsController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

const getStudentController = new GetStudentController();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.post(
  "/register",
  validateMiddleware(registerSchema),
  new CreateStudentsController().handle
);

studentsRouter.post("/login", new LoginStudentController().login);

studentsRouter.get("/", getStudentController.handle);

studentsRouter.post(
  "/upload",
  uploadPhoto.single("file"),
  new UpdatePhotoStudentsController().handle
);

studentsRouter.patch(
  "/profile",
  authenticate,
  new UpdateStudentsController().handle
);

export { studentsRouter };
