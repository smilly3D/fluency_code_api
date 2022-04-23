import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetTeacherUseCase } from "./GetTeacherUseCase";

class GetTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getTeacherUseCase = container.resolve(GetTeacherUseCase);
    const all = await getTeacherUseCase.execute();

    return response.json(all);
  }
}

export { GetTeacherController };
