import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTeacherByIdUseCase } from "./getTeacherByIdUseCase";

class GetTeacherByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const getTeacherByIdUseCase = container.resolve(GetTeacherByIdUseCase);
      const { id } = req.params;

      const teacher = await getTeacherByIdUseCase.execute(id);

      if (!teacher) {
        return res.status(404).json({ message: "teacher not found" });
      }

      delete teacher.password;

      return res.json(teacher);
    } catch (e) {
      return res.status(404).json({ message: "teacher not found" });
    }
  }
}

export { GetTeacherByIdController };
