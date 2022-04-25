import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetStudentByIdUseCase } from "./getStudentByIdUseCase";

class GetStudentByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const getStudentUseCase = container.resolve(GetStudentByIdUseCase);
      const { id } = req.params;

      const student = await getStudentUseCase.execute(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      delete student.password;

      return res.json(student);
    } catch (e) {
      return res.status(400).json({ message: "invalid id" });
    }
  }
}

export { GetStudentByIdController };
