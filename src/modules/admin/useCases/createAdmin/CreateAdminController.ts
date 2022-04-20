import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAdminUseCase } from "./CreateadminUseCase";

class CreateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      biography,
      cpf,
      email,
      name,
      password,
      phone,
      photo_url,
      description,
    } = request.body;

    const createAdminUseCase = container.resolve(CreateAdminUseCase);

    await createAdminUseCase.execute({
      biography,
      cpf,
      email,
      name,
      password,
      phone,
      photo_url,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateAdminController };
