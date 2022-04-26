import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStudentUseCase } from "./deleteStudentUseCase";

class DeleteStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const deleteStudentUseCase = container.resolve(DeleteStudentUseCase);
      const { id } = req.params;

      const student = await deleteStudentUseCase.execute(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({ message: "invalid id" });
    }
  }
}

export { DeleteStudentController };
