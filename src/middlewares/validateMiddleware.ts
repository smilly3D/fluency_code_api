import { Request, Response, NextFunction } from "express";
import * as yup from "yup";

export const validateMiddleware =
  (schema: yup.AnyObjectSchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const resource = request.body;

    try {
      await schema.validate(resource, { abortEarly: false });
      return next();
    } catch (e) {
      return response.status(400).json({ error: e.errors });
    }
  };
