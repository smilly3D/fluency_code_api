import { Router } from "express";
import multer from "multer";

import multerConfig from "../config/multer/multerConfig";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { UpdatePhotoStudentsController } from "../modules/students/useCases/updatePhotoStudents/updatePhotoStudentsController";
import { registerSchema } from "../schemas/registerSchema";

const studentsRouter = Router();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.post(
  "/register",
  validateMiddleware(registerSchema),
  new CreateStudentsController().handle
);

studentsRouter.post(
  "/upload",
  uploadPhoto.single("file"),
  new UpdatePhotoStudentsController().handle
);

export { studentsRouter };
