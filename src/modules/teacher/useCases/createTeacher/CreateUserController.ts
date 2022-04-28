import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTeacherUseCase } from "./CreateTeacherUseCase";

class CreateTeacherController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { biography, cpf, email, github, hour, name, password, phone, photo_url, description } = request.body;

    const createTeacherUseCase = container.resolve(CreateTeacherUseCase);

    await createTeacherUseCase.execute({
      biography,
      cpf,
      email,
      github,
      hour,
      name,
      password,
      phone,
      photo_url,
      description,
    });

    return response.status(201).json({ message: "Teacher created successfully" });
  }
}

export { CreateTeacherController };
