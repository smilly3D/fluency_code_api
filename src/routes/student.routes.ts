import { Router } from "express";
import multer from "multer";

import multerConfig from "../configs/multer/multerConfig";
import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { DeleteStudentController } from "../modules/students/useCases/deleteStudent/deleteStudentController";
import { GetStudentController } from "../modules/students/useCases/getStudent/getStudentController";
import { GetStudentByIdController } from "../modules/students/useCases/getStudentById/getStudentByIdController";
import { LoginStudentController } from "../modules/students/useCases/loginStudents/loginStudentsController";
import { UpdatePhotoStudentsController } from "../modules/students/useCases/updatePhotoStudents/updatePhotoStudentsController";
import { UpdateStudentsController } from "../modules/students/useCases/updateStudents/updateStudentsController";
import { registerStudentSchema } from "../schemas";

const studentsRouter = Router();

const getStudentController = new GetStudentController();
const deleteStudentController = new DeleteStudentController();
const getStudentByIdController = new GetStudentByIdController();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.post(
  "/register",
  validateMiddleware(registerStudentSchema),
  new CreateStudentsController().handle
);

studentsRouter.post("/login", new LoginStudentController().login);

studentsRouter.post(
  "/upload",
  uploadPhoto.single("file"),
  new UpdatePhotoStudentsController().handle
);

studentsRouter.delete("/:id", deleteStudentController.handle);
studentsRouter.patch(
  "/profile",
  authenticate,
  new UpdateStudentsController().handle
);

studentsRouter.get("/", getStudentController.handle);
studentsRouter.get("/:id", getStudentByIdController.handle);

export { studentsRouter };
