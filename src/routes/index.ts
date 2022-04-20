import { Router } from "express";

import { studentsRouter } from "./student.routes";
import { teachersRoutes } from "./teacher.routes";

const router = Router();

router.use("/students", studentsRouter);

router.use("/teacher", teachersRoutes);

export { router };
