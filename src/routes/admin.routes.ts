import { Router } from "express";

import { authenticate } from "../middlewares/authenticateMiddleware";
import { validateMiddleware } from "../middlewares/validateMiddleware";
import { CreateAdminController } from "../modules/admin/useCases/createAdmin/CreateAdminController";
import { DeleteAdminController } from "../modules/admin/useCases/deleteAdmin/deleteAdminController";
import { GetAdminController } from "../modules/admin/useCases/getAdmin/GetAdminController";
import { LoginAdminController } from "../modules/admin/useCases/loginAdmin/LoginAdminController";
import { UpdateAdminController } from "../modules/admin/useCases/updateAdmin/updateAdminController";
import { loginSchema, registerAdminSchema } from "../schemas";

const adminRoutes = Router();

const createAdminControler = new CreateAdminController();
const getAdminController = new GetAdminController();
const loginAdminController = new LoginAdminController();
const updateAdminController = new UpdateAdminController();
const deleteAdminController = new DeleteAdminController();

adminRoutes.get("/", authenticate(["admin"]), getAdminController.handle);
adminRoutes.post("/", authenticate(["admin"]), validateMiddleware(registerAdminSchema), createAdminControler.handle);
adminRoutes.post("/login", validateMiddleware(loginSchema), loginAdminController.handle);

adminRoutes.patch("/:id", authenticate(["admin"]), updateAdminController.handle);
adminRoutes.delete("/:id", authenticate(["admin"]), deleteAdminController.handle);

export { adminRoutes };
