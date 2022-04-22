import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { JWT_CONFIG } from "../../../../configs";
import { AppError } from "../../../../errors/AppError";
import { ILoginAdminDTO } from "../../dtos/ILoginAdminDTO";
import { IAdminRepository } from "../../repositories/IAdminRepository";

@injectable()
class LoginAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) {}
  async execute({ email, password }: ILoginAdminDTO): Promise<string | Error> {
    const admin = await this.adminRepository.findByEmail(email);

    if (!admin) {
      throw new AppError("User already exists", 404);
    }

    const hasedPassword = await bcrypt.compare(password, admin.password);

    if (!hasedPassword) {
      throw new AppError("Invalid Password");
    }
    const { id } = admin;
    const accessToken = jwt.sign({ id }, JWT_CONFIG.SECRET_KEY, {
      expiresIn: JWT_CONFIG.EXPIRES_IN,
    });

    return accessToken;
  }
}

export { LoginAdminUseCase };
