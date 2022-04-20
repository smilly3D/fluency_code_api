import { Router } from "express";

import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";

const adminRoutes = Router();

const createTeacherControler = new CreateAdminController();

adminRoutes.post("/", createTeacherControler.handle);

export { adminRoutes };
