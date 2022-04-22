import { ICreateStudents } from "../@types";
import { Students } from "../entities/Student";

export interface IStudentsRepositories {
  create: (student: ICreateStudents) => Promise<string | Error>;
  findById: (user_id: string) => Promise<Students>;
  updatePhoto: (user_id: string, photo: string) => Promise<void>;
}
