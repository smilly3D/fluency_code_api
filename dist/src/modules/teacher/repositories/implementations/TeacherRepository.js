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
exports.TeacherRepository = void 0;
const typeorm_1 = require("typeorm");
const Teacher_1 = require("../../entities/Teacher");
class TeacherRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Teacher_1.Teacher);
    }
    create({ biography, cpf, email, github, hour, name, password, phone, photo_url, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = this.repository.create({
                biography,
                cpf,
                email,
                github,
                hour,
                name,
                password,
                phone,
                photo_url,
            });
            yield this.repository.save(teacher);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield this.repository.findOne({ email });
            return teacher;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield this.repository.findOne(id);
            return teacher;
        });
    }
    findByCPF(cpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield this.repository.findOne({ cpf });
            return teacher;
        });
    }
}
exports.TeacherRepository = TeacherRepository;
//# sourceMappingURL=TeacherRepository.js.map