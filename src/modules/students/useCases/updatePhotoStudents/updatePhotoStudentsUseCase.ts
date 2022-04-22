import { inject, injectable } from "tsyringe";
import "dotenv/config";

import { IS3Provider } from "../../../../shared/providers/S3Storage/IS3Provider";
import { IStudentsRepositories } from "../../repositories/IStudentsRepositories";

interface IRequest {
  id: string;
  avatar_file: string;
}

@injectable()
export class UpdatePhotoStudentsUseCase {
  constructor(
    @inject("StudentsRepositories")
    private studentsRepositories: IStudentsRepositories,
    @inject("S3Provider")
    private s3Provider: IS3Provider
  ) {}

  async execute({ avatar_file, id }: IRequest): Promise<void> {
    this.s3Provider.save(avatar_file);

    await this.studentsRepositories.updatePhoto(
      id,
      `${process.env.BASE_URL_BUCKET}/avatar/${avatar_file}`
    );
  }
}
