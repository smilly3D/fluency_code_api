import { Request, Response } from "express";
import { container } from "tsyringe";

import { LoginStudentUseCase } from "./loginStudentsUseCase";

class LoginStudentController {
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginStudentsUseCase = container.resolve(LoginStudentUseCase);

    const token = await loginStudentsUseCase.execute({ email, password });

    return response.status(201).json({ token });
  }
}

export { LoginStudentController };
