import { Request, Response } from "express";
import { container } from "tsyringe";

import { updateStudentsUseCase } from "./updateStudentsUseCase";

export class UpdateStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const { id } = request;

    const updated = container.resolve(updateStudentsUseCase);

    updated.execute({ id, data });

    return response.status(202).json({ message: "Updated Success" });
  }
}
