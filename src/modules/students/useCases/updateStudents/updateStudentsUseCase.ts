import "dotenv";
import { inject, injectable } from "tsyringe";

import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";
import { IUpdateStudentsDTO } from "./IUpdateStudentsDTO";

interface IRequest {
  id: string;
  data: IUpdateStudentsDTO;
}

@injectable()
export class updateStudentsUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}

  async execute({ id, data }: IRequest) {
    this.studentsRepositories.update(id, data);
  }
}
