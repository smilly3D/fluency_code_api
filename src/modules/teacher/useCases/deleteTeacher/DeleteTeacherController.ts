import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTeacherUseCase } from "./DeleteTeacherUsecase";

class DeleteTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTeacherController = container.resolve(DeleteTeacherUseCase);

    const message = await deleteTeacherController.execute(id);

    return response.status(200).json({ message });
  }
}

export { DeleteTeacherController };
