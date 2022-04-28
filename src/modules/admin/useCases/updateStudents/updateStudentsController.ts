import { Request, Response } from "express";
import { container } from "tsyringe";

import { updateAdminUseCase } from "./updateStudentsUseCase";

export class UpdateadminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const token = request.headers.authorization.split(" ")[1];

    const updated = container.resolve(updateAdminUseCase);

    updated.execute({ token, data });

    return response.status(202).json({ message: "Updated Success" });
  }
}
