import { Router } from "express";

import { exampleRoutes } from "./exemple.routes";

const router = Router();

router.use("/example", exampleRoutes);

export { router };
