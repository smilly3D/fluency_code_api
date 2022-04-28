import jwt from "jsonwebtoken";
import "dotenv";
import { inject, injectable } from "tsyringe";

import { IAdminRepository } from "../../repositories/IAdminRepository";

@injectable()
export class updateAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) { }

  async execute({ token, data }) {
    const adminInformations: any = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (_err, decoded) => decoded
    );

    this.adminRepository.update(adminInformations.sub, data);
  }
}
