"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const studentsRepositories_1 = require("../../modules/students/repositories/implementions/studentsRepositories");
const TeacherRepository_1 = require("../../modules/teacher/repositories/implementations/TeacherRepository");
tsyringe_1.container.registerSingleton("StudentsRepositories", studentsRepositories_1.StudentsRepositories);
tsyringe_1.container.registerSingleton("TeacherRepository", TeacherRepository_1.TeacherRepository);
//# sourceMappingURL=index.js.map