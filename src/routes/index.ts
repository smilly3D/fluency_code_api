import { Router } from "express";

import { adminRoutes } from "./admin.routes";
import { coursesRoutes } from "./courses.routes";
import { studentsRouter } from "./student.routes";
import { teachersRoutes } from "./teacher.routes";

const router = Router();

router.use("/admin", adminRoutes);

router.use("/students", studentsRouter);

router.use("/teacher", teachersRoutes);

router.use("/courses", coursesRoutes);

export { router };
