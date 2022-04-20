import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStudentsUseCase } from "./createStudentsUseCase";

export class CreateStudentsController {
    async handle(request: Request, response: Response) : Promise<Response> {
        const { name, email, password } = request.body;

        const createStudentsUseCase = container.resolve(CreateStudentsUseCase);

        const result = await createStudentsUseCase.execute({name, email, password});

        if(result instanceof Error){
            return response.status(409).json({error: "User already exists"});
        }

        return response.status(201).json({message: result});
    }
} 