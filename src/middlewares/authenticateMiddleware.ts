import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import "dotenv";
import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
}

export const authenticate = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const { sub: id } = verify(token, process.env.SECRET_KEY) as IPayload;

    request.id = id;

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
};
