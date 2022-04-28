import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteAdminUseCase } from "./deleteAdminUseCase";

class DeleteAdminController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteAdminUseCase = container.resolve(DeleteAdminUseCase);

    const message = await deleteAdminUseCase.execute(id);

    return res.json({ message });
  }
}

export { DeleteAdminController };
