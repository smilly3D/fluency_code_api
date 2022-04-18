import { Router, Request, Response } from "express";

const exampleRoutes = Router();

exampleRoutes.get("/", (request: Request, response: Response) => {
  const helo = "Helo world";

  return response.status(200).send(helo);
});

export { exampleRoutes };
