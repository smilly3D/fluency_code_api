import bcrypt from "bcrypt";
import { getRepository, Repository } from "typeorm";

import { ICreateAdminrDTO } from "../../dtos/ICreateAdminDTO";
import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../IAdminRepository";

class AdminRepository implements IAdminRepository {
  private repository: Repository<Admin>;

  constructor() {
    this.repository = getRepository(Admin);
  }

  async create({
    biography,
    cpf,
    email,
    name,
    password,
    phone,
    photo_url,
  }: ICreateAdminrDTO): Promise<void> {
    const admin = this.repository.create({
      biography,
      cpf,
      email,
      name,
      password,
      phone,
      photo_url,
    });

    await this.repository.save(admin);
  }
  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.repository.findOne({ email });
    return admin;
  }
  async findById(id: string): Promise<Admin> {
    const admin = await this.repository.findOne(id);
    return admin;
  }

  async findByCPF(cpf: string): Promise<Admin> {
    const admin = await this.repository.findOne({ cpf });
    return admin;
  }

  async list(): Promise<Admin[]> {
    return this.repository.find();
  }

  async update(id: string, data: any): Promise<void> {
    const repo = getRepository(Admin);

    const admin = await repo.findOne(id);

    admin.cpf = data.cpf ?? admin.cpf;
    admin.phone = data.phone ?? admin.phone;
    admin.biography = data.biography ?? admin.biography;
    admin.description = data.description ?? admin.description;
    admin.name = data.name ?? admin.name;
    admin.password = data.password
      ? await bcrypt.hash(data.password, 10)
      : admin.password;

    await repo.save(admin);
  }

  async delete(admin: Admin): Promise<void> {
    await this.repository.remove(admin);
  }
}

export { AdminRepository };
