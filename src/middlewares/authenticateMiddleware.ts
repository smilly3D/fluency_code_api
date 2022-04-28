import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import "dotenv";

import { AppError } from "../errors/AppError";

interface IPayload {
  sub: string;
  type: string;
}

export const authenticate =
  (types: string[]) =>
  (request: Request, response: Response, next: NextFunction) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError("Token missing", 401);
    }

    const token = authHeader.split(" ")[1];

    try {
      const { sub: id, type } = verify(
        token,
        process.env.SECRET_KEY
      ) as IPayload;

      if (!types.includes(type)) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      request.id = id;

      return next();
    } catch {
      throw new AppError("Invalid token!", 401);
    }
  };
