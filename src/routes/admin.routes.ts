import { Router } from "express";

import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { LoginAdminController } from "../modules/admin/useCases/loginAdmin/LoginAdminController";

const adminRoutes = Router();

const createTeacherControler = new CreateAdminController();
const loginAdminController = new LoginAdminController();

adminRoutes.post("/", createTeacherControler.handle);
adminRoutes.post("/admin", loginAdminController.handle);

export { adminRoutes };
