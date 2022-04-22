import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetStudentUseCase } from "./getStudentUseCase";

class GetStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getStudentUseCase = container.resolve(GetStudentUseCase);
    const all = await getStudentUseCase.execute();

    return res.json(all);
  }
}

export { GetStudentController };
