import { Router } from "express";

import { CreateCourseController } from "../modules/courses/useCases/createCourse/CreateAdminController";
import { GetCoursesController } from "../modules/courses/useCases/getCourses/getCoursesController";

const coursesRoutes = Router();

const getCoursesController = new GetCoursesController();
const createCourseController = new CreateCourseController();

coursesRoutes.get("/", getCoursesController.handle);
coursesRoutes.post("/", createCourseController.handle);

export { coursesRoutes };
