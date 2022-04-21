import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginTeacherUseCase } from "./LoginTeacherUseCase";

class LoginTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createTeacherUseCase = container.resolve(LoginTeacherUseCase);

    const token = await createTeacherUseCase.execute({ email, password });

    return response.status(201).json({ token });
  }
}

export { LoginTeacherController };
