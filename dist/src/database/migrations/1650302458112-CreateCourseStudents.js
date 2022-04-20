"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourseStudents1650302458112 = void 0;
const typeorm_1 = require("typeorm");
class CreateCourseStudents1650302458112 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "course_students",
                columns: [
                    {
                        name: "student_id",
                        type: "uuid",
                    },
                    {
                        name: "course_id",
                        type: "uuid",
                    },
                ],
            }));
            yield queryRunner.createForeignKey("course_students", new typeorm_1.TableForeignKey({
                name: "FKCourseStudents",
                referencedTableName: "courses",
                referencedColumnNames: ["id"],
                columnNames: ["course_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }));
            yield queryRunner.createForeignKey("course_students", new typeorm_1.TableForeignKey({
                name: "FKStudentsCourse",
                referencedTableName: "students",
                referencedColumnNames: ["id"],
                columnNames: ["student_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey("course_students", "FKStudentsCourse");
            yield queryRunner.dropForeignKey("course_students", "FKCourseStudents");
            yield queryRunner.dropTable("course_students");
        });
    }
}
exports.CreateCourseStudents1650302458112 = CreateCourseStudents1650302458112;
//# sourceMappingURL=1650302458112-CreateCourseStudents.js.map