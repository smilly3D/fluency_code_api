import { inject, injectable } from "tsyringe";

import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../../repositories/IAdminRepository";

@injectable()
class GetAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) { }

  execute(): Promise<Admin[]> {
    const admin = this.adminRepository.list();
    console.log(admin);
    return admin;
  }
}

export { GetAdminUseCase };
