import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCoursesUseCase } from "./getCoursesUseCase";

class GetCoursesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const getCoursesUseCase = container.resolve(GetCoursesUseCase);
    const all = await getCoursesUseCase.execute();

    return res.json(all);
  }
}

export { GetCoursesController };
