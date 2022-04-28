import { Request, Response } from "express";
import { container } from "tsyringe";

import { AproveTeacherUseCase } from "./AproveTeacherUseCase";

class AproveTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const aproveTeacherUseCase = container.resolve(AproveTeacherUseCase);

    const data = request.body;
    const { teacher_id } = request.params;

    const teacher = await aproveTeacherUseCase.execute(teacher_id, data);

    if (!teacher.email) {
      return response.status(404).json({ error: "invalid id" });
    }

    delete teacher.password;

    return response.status(200).json(teacher);
  }
}

export { AproveTeacherController };
