import { Router } from "express";

import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { GetAdminController } from "../modules/admin/useCases/getAdmin/GetAdminController";

const adminRoutes = Router();

const createAdminControler = new CreateAdminController();
const getAdminController = new GetAdminController();

adminRoutes.post("/", createAdminControler.handle);
adminRoutes.get("/", getAdminController.handle);

export { adminRoutes };
