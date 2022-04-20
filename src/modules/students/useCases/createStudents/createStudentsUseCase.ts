import { inject, injectable } from "tsyringe";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";
import { createStudentsDTO } from "./createStudentsDTO";
import bcrypt from 'bcrypt';


@injectable()
export class CreateStudentsUseCase {

    constructor(
        @inject("StudentsRepositories")
        private studentsRepositories: IStudentsRepositories
    ){}

    async execute({name, email, password} : createStudentsDTO) : Promise<any> {

        password = await bcrypt.hash(password, 10)
        
        const student = await this.studentsRepositories.create({name, email, password})

        return student
    }
}