import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteStudentUseCase } from "./deleteStudentUseCase";

class DeleteStudentUseCase {
  async handle(req: Request, res: Response): Promise<Response> {
    const deleteStudentUseCase = container.resolve(DeleteStudentUseCase);
    const all = await deleteStudentUseCase.execute();

    return res.json(all);
  }
}

export { DeleteStudentUseCase };
