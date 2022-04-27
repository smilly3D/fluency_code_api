import jwt from "jsonwebtoken";
import "dotenv";
import { inject, injectable } from "tsyringe";

import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

@injectable()
export class updateStudentsUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories
  ) {}

  async execute({ token, data }) {
    const userInformations: any = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (_err, decoded) => decoded
    );

    this.studentsRepositories.update(userInformations.sub, data);
  }
}
