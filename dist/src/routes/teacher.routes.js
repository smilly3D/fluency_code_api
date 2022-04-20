"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachersRoutes = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("../modules/teacher/useCases/createTeacher/CreateUserController");
const teachersRoutes = (0, express_1.Router)();
exports.teachersRoutes = teachersRoutes;
const createTeacherControler = new CreateUserController_1.CreateTeacherController();
teachersRoutes.post("/", createTeacherControler.handle);
//# sourceMappingURL=teacher.routes.js.map