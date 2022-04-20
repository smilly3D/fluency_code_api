import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateAdminrDTO } from "../../dtos/ICreateAdminDTO";
import { AdminRepository } from "../../repositories/implementations/AdminRepository";

@injectable()
class CreateAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: AdminRepository
  ) { }
  async execute({
    biography,
    cpf,
    email,
    name,
    password,
    phone,
    photo_url,
    description,
  }: ICreateAdminrDTO): Promise<void> {
    const adminAlreadyExists = await this.adminRepository.findByEmail(email);

    if (adminAlreadyExists) {
      throw new AppError("User already exists");
    }
    const cpfAlreadyExists = await this.adminRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new AppError("CPF already exists");
    }

    const passwordHash = await hash(password, 8);

    this.adminRepository.create({
      biography,
      cpf,
      email,
      name,
      password: passwordHash,
      phone,
      photo_url,
      description,
    });
  }
}

export { CreateAdminUseCase };
