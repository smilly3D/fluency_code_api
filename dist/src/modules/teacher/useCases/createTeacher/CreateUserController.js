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
exports.CreateTeacherController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateTeacherUseCase_1 = require("./CreateTeacherUseCase");
class CreateTeacherController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { biography, cpf, email, github, hour, name, password, phone, photo_url, description, } = request.body;
            const createTeacherUseCase = tsyringe_1.container.resolve(CreateTeacherUseCase_1.CreateTeacherUseCase);
            yield createTeacherUseCase.execute({
                biography,
                cpf,
                email,
                github,
                hour,
                name,
                password,
                phone,
                photo_url,
                description,
            });
            return response.status(201).send();
        });
    }
}
exports.CreateTeacherController = CreateTeacherController;
//# sourceMappingURL=CreateUserController.js.map