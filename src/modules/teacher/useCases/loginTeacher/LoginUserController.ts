import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginTeacherUseCase } from "./LoginTeacherUseCase";

class LoginTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginTeacherUseCase = container.resolve(LoginTeacherUseCase);

    const token = await loginTeacherUseCase.execute({ email, password });

    return response.json({ token });
  }
}

export { LoginTeacherController };
