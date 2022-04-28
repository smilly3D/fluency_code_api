import { Router } from "express";

import { GetCoursesController } from "../modules/courses/useCases/getCourses/getCoursesController";

const coursesRoutes = Router();

const getCoursesController = new GetCoursesController();

coursesRoutes.get("/", getCoursesController.handle);

export { coursesRoutes };
