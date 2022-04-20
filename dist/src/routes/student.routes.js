"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsRouter = void 0;
const express_1 = require("express");
const validateMiddleware_1 = require("../middlewares/validateMiddleware");
const createStudentsController_1 = require("../modules/students/useCases/createStudents/createStudentsController");
const registerSchema_1 = require("../schemas/registerSchema");
const studentsRouter = (0, express_1.Router)();
exports.studentsRouter = studentsRouter;
studentsRouter.post("/register", (0, validateMiddleware_1.validateMiddleware)(registerSchema_1.registerSchema), new createStudentsController_1.CreateStudentsController().handle);
//# sourceMappingURL=student.routes.js.map