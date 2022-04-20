"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const student_routes_1 = require("./student.routes");
const teacher_routes_1 = require("./teacher.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/students", student_routes_1.studentsRouter);
router.use("/teacher", teacher_routes_1.teachersRoutes);
//# sourceMappingURL=index.js.map