import { inject, injectable } from "tsyringe";

import { IAdminRepository } from "../../repositories/IAdminRepository";

@injectable()
export class updateAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) { }

  async execute({id, data}) {
    this.adminRepository.update(id, data);
  }
}
