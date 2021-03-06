import { Router } from "express";
import multer from "multer";

import multerConfig from "../configs/multer/multerConfig";
import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateStudentsController } from "../modules/students/useCases/createStudents/createStudentsController";
import { DeleteStudentController } from "../modules/students/useCases/deleteStudent/deleteStudentController";
import { DeleteStudentProfileController } from "../modules/students/useCases/deleteStudentsProfile/deleteStudentsProfileController";
import { GetStudentProfileController } from "../modules/students/useCases/getStudenProfile/getStudentProfileController";
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
const getStudentProfileController = new GetStudentProfileController();

const uploadPhoto = multer(multerConfig.upload());

studentsRouter.get("/", authenticate(["admin"]), getStudentController.handle);
studentsRouter.post("/", validateMiddleware(registerStudentSchema), new CreateStudentsController().handle);

studentsRouter.post("/login", new LoginStudentController().login);

studentsRouter.get("/profile", authenticate(), getStudentProfileController.handle);
studentsRouter.patch("/profile", authenticate(), new UpdateStudentsController().handle);
studentsRouter.delete("/profile", authenticate(), new DeleteStudentProfileController().handle);

studentsRouter.post("/upload", uploadPhoto.single("file"), new UpdatePhotoStudentsController().handle);

studentsRouter.get("/:id", authenticate(["admin"]), getStudentByIdController.handle);
studentsRouter.delete("/:id", authenticate(["admin"]), deleteStudentController.handle);
export { studentsRouter };
