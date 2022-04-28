import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv";

export const authenticate = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (!request.headers.authorization) {
    return response.status(401).json({ message: "invalid token." });
  }
  const token = request.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err) => {
    if (err) {
      return response.status(401).json({ message: "invalid token." });
    }
  });

  return next();
};
