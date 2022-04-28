import { ICreateAdminrDTO } from "../dtos/ICreateAdminDTO";
import { Admin } from "../entities/Admin";

interface IAdminRepository {
  create(data: ICreateAdminrDTO): Promise<void>;
  findByEmail(email: string): Promise<Admin>;
  findById(id: string): Promise<Admin>;
  findByCPF(cpf: string): Promise<Admin>;
  list(): Promise<Admin[]>;
  delete(admin: Admin): Promise<void>;
}

export { IAdminRepository };
