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
exports.courses1650286444635 = void 0;
const typeorm_1 = require("typeorm");
class courses1650286444635 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "courses",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "knowledge",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "trainingFor",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "teacher_id",
                        type: "uuid",
                        isNullable: false,
                    },
                    {
                        name: "price",
                        type: "float",
                        isNullable: false,
                    },
                    {
                        name: "content_id",
                        type: "varchar ",
                        isNullable: false,
                    },
                    {
                        name: "photo_url",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "students_total",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "createdOn",
                        type: "date",
                        default: "now()",
                    },
                    {
                        name: "updatedOn",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_course_teacher",
                        columnNames: ["teacher_id"],
                        referencedTableName: "teachers",
                        referencedColumnNames: ["id"],
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("courses");
        });
    }
}
exports.courses1650286444635 = courses1650286444635;
//# sourceMappingURL=1650303245298-CreateCourse.js.map