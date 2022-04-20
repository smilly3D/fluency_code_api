import { Router } from "express";

import { teachersRoutes } from "./exemple.routes";

const router = Router();

router.use("/teacher", teachersRoutes);

export { router };
