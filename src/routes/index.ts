import { Router } from "express";

import { studentsRouter } from "./student.routes";

const router = Router();

router.use("/students", studentsRouter);

export { router };
