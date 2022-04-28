import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTeacherUseCase } from "./UpdateTeacherUseCase";

class UpdateTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateTeacherUseCase = container.resolve(UpdateTeacherUseCase);

    const data = request.body;
    const { teacher_id } = request.params;

    const teacher = await updateTeacherUseCase.execute(teacher_id, data);

    if (!teacher.email) {
      return response.status(400).json({ error: "invalid id" });
    }

    delete teacher.password;

    return response.status(200).json(teacher);
  }
}

export { UpdateTeacherController };
