import { Request, Response } from "express";
import { container } from "tsyringe";

import { AproveTeacherUseCase } from "./AproveTeacherUseCase";

class AproveTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const aproveTeacherUseCase = container.resolve(AproveTeacherUseCase);

    const { teacher_id } = request.params;

    const teacher = await aproveTeacherUseCase.execute(teacher_id);

    if (!teacher.email) {
      return response.status(404).json({ error: "Teacher not found" });
    }

    delete teacher.password;

    return response.status(200).json(teacher);
  }
}

export { AproveTeacherController };
