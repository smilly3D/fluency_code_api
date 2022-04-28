import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IAdminRepository } from "../../repositories/IAdminRepository";

@injectable()
class DeleteAdminUseCase {
  constructor(
    @inject("AdminRepositories")
    private adminRepository: IAdminRepository
  ) { }

  async execute(id: string): Promise<string | Error> {
    const admin = await this.adminRepository.findById(id);

    if (!admin) {
      throw new AppError("Admin not exists", 404);
    }

    await this.adminRepository.delete(admin);

    return "Admin deleted with success";
  }
}

export { DeleteAdminUseCase };
