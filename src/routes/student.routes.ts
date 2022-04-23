import { Router } from "express";
import multer from "multer";

import multerConfig from "../configs/multer/multerConfig";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { GetStudentController } from "../modules/students/useCases/getStudent/getStudentController";
import { UpdatePhotoStudentsController } from "../modules/students/useCases/updatePhotoStudents/updatePhotoStudentsController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

const getStudentController = new GetStudentController();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.post(
  "/register",
  validateMiddleware(registerSchema),
  new CreateStudentsController().handle
);

studentsRouter.get("/", getStudentController.handle);

studentsRouter.post(
  "/upload",
  uploadPhoto.single("file"),
  new UpdatePhotoStudentsController().handle
);

export { studentsRouter };
