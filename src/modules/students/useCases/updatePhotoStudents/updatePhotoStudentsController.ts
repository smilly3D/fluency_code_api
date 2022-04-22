/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { container } from "tsyringe";
import "dotenv/config";

import { UpdatePhotoStudentsUseCase } from "./updatePhotoStudentsUseCase";

export class UpdatePhotoStudentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const avatar_file = request.file.filename;
    const token = request.headers.authorization.split(" ")[1];

    const updateUserAvatarUseCase = container.resolve(
      UpdatePhotoStudentsUseCase
    );

    const userDecoded: any = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err, decoded) => decoded
    );

    await updateUserAvatarUseCase.execute({ avatar_file, id: userDecoded.id });

    return response.status(202).json({
      message: `Success Updated photo`,
    });
  }
}
