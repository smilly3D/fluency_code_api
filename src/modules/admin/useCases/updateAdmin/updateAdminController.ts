import { Request, Response } from "express";
import { container } from "tsyringe";

import { updateAdminUseCase } from "./updateAdminUseCase";

export class UpdateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;
		const { id } = request.params;

    const updated = container.resolve(updateAdminUseCase);

    await updated.execute({ id, data });

    return response.json({ message: "Updated Success" });
  }
}
