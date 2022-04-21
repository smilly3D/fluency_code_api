import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginAdminUseCase } from "./LoginAdminUseCase";

class LoginAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginAdminUseCase = container.resolve(LoginAdminUseCase);

    const token = await loginAdminUseCase.execute({ email, password });

    return response.status(201).json({ token });
  }
}

export { LoginAdminController };
