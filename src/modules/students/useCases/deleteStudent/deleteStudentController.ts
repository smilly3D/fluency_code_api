import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStudentUseCase } from "./deleteStudentUseCase";

class DeleteStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteStudentUseCase = container.resolve(DeleteStudentUseCase);

    const message = await deleteStudentUseCase.execute(id);

    return res.json({ message });
  }
}

export { DeleteStudentController };
