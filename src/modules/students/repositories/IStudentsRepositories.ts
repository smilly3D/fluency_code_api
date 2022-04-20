import { ICreateStudents } from "../@types";

export interface IStudentsRepositories {
  create: (student: ICreateStudents) => Promise<string | Error>;
}
