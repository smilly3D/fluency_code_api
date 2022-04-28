import { Router } from "express";

import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { GetAdminController } from "../modules/admin/useCases/getAdmin/GetAdminController";
import { LoginAdminController } from "../modules/admin/useCases/loginAdmin/LoginAdminController";
import { UpdateadminController } from "../modules/admin/useCases/updateStudents/updateStudentsController";
import { loginSchema, registerAdminSchema } from "../schemas";

const adminRoutes = Router();

const createAdminControler = new CreateAdminController();
const getAdminController = new GetAdminController();
const loginAdminController = new LoginAdminController();
const updateAdminController = new UpdateadminController();

adminRoutes.get("/", getAdminController.handle);
adminRoutes.post(
  "/",
  validateMiddleware(registerAdminSchema),
  createAdminControler.handle
);
adminRoutes.post(
  "/login",
  validateMiddleware(loginSchema),
  loginAdminController.handle
);
adminRoutes.patch("/", authenticate, updateAdminController.handle);

export { adminRoutes };
