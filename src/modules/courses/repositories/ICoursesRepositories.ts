import { Courses } from "../entities/Courses";

export interface ICoursesRepositories {
  findByEmail(email: string): Promise<Courses>;
  findById(id: string): Promise<Courses>;
  findByCPF(cpf: string): Promise<Courses>;
  list(): Promise<Courses[]>;
  updatePhoto: (user_id: string, photo: string) => Promise<void>;
  update: (user_id: string, data: any) => Promise<void>;
}
