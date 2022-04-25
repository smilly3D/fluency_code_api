import { ICreateStudents } from "../@types";
import { Students } from "../entities/Student";

export interface IStudentsRepositories {
  create: (student: ICreateStudents) => Promise<string | Error>;
  findByEmail(email: string): Promise<Students>;
  findById(id: string): Promise<Students>;
  findByCPF(cpf: string): Promise<Students>;
  list(): Promise<Students[]>;
  updatePhoto: (user_id: string, photo: string) => Promise<void>;
  update: (user_id: string, data: any) => Promise<void>;
}
