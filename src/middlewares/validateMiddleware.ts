import { Request, Response, NextFunction } from "express";

export const validateMiddleware =
  (schema: any) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const resource = request.body;

    try {
      await schema.validate(resource);
      return next();
    } catch (e: any) {
      return response.status(400).json({ error: e.errors.join(", ") });
    }
  };
