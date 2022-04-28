import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStudentProfileUseCase } from "./deleteStudentsProfileUseCase";

export class DeleteStudentProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request;

    const deleteStudentProfileController = container.resolve(DeleteStudentProfileUseCase);

    const message = await deleteStudentProfileController.execute(id);

    return response.json({ message });
  }
}
