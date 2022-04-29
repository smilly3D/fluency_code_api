import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetStudentProfileUseCase } from "./getStudentProfileUseCase";

class GetStudentProfileController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getStudentUseCase = container.resolve(GetStudentProfileUseCase);

    const student = await getStudentUseCase.execute(req.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    delete student.password;

    return res.json(student);
  }
}

export { GetStudentProfileController };
