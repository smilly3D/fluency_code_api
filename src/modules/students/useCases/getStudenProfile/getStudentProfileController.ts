import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { container } from "tsyringe";

import { GetStudentProfileUseCase } from "./getStudentProfileUseCase";

class GetStudentProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getStudentUseCase = container.resolve(GetStudentProfileUseCase);
    const token = req.headers.authorization.split(" ")[1];

    const id = jwt.verify(token, process.env.SECRET_KEY, (_, { id }) => id);

    const student = await getStudentUseCase.execute(id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    delete student.password;

    return res.json(student);
  }
}

export { GetStudentProfileController };
