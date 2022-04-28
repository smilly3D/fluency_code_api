import { Router } from "express";

import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { DeleteAdminController } from "../modules/admin/useCases/deleteAdmin/deleteAdminController";
import { GetAdminController } from "../modules/admin/useCases/getAdmin/GetAdminController";
import { LoginAdminController } from "../modules/admin/useCases/loginAdmin/LoginAdminController";
import { loginSchema, registerAdminSchema } from "../schemas";

const adminRoutes = Router();

const createAdminControler = new CreateAdminController();
const getAdminController = new GetAdminController();
const loginAdminController = new LoginAdminController();
const deleteAdminController = new DeleteAdminController();

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
adminRoutes.delete("/:id", deleteAdminController.handle);

export { adminRoutes };
