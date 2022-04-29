import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAdminUseCase } from "./GetAdminUseCase";

class GetAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAdminUseCase = container.resolve(GetAdminUseCase);
    const all = await getAdminUseCase.execute();

    return response.json(all);
  }
}

export { GetAdminController };
