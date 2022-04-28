import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCourseUseCase } from "./CreateCourseUseCase";

class CreateCourseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      photo_url,
      description,
      content_id,
      knowledge,
      price,
      students_total,
      teacher_id,
      trainingFor,
    } = request.body;

    const createCourseUseCase = container.resolve(CreateCourseUseCase);

    await createCourseUseCase.execute({
      name,
      photo_url,
      description,
      content_id,
      knowledge,
      price,
      students_total,
      teacher_id,
      trainingFor,
    });

    return response.status(201).send();
  }
}

export { CreateCourseController };
