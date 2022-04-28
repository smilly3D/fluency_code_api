import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStudentProfileUseCase } from "./deleteStudentsProfileUseCase";

export class DeleteStudentProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.headers.authorization.split(" ")[1];

    const deleteStudentProfileController = container.resolve(
      DeleteStudentProfileUseCase
    );

    const message = await deleteStudentProfileController.execute(token);
    return response.json({ message });
  }
}
