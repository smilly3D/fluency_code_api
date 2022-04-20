import { Router } from "express";

import { adminRoutes } from "./admin.routes";
import { studentsRouter } from "./student.routes";
import { teachersRoutes } from "./teacher.routes";

const router = Router();

router.use("/admin", adminRoutes);

router.use("/students", studentsRouter);

router.use("/teacher", teachersRoutes);

export { router };
