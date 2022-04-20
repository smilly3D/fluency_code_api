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
exports.teacher1650141367476 = void 0;
const typeorm_1 = require("typeorm");
class teacher1650141367476 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "teachers",
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
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "biography",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "photo_url",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "github",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "hour",
                        type: "varchar",
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("teachers");
        });
    }
}
exports.teacher1650141367476 = teacher1650141367476;
//# sourceMappingURL=1650304340550-CreateTeachers.js.map