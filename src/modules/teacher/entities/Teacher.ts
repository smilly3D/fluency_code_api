import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("teachers")
class Teacher {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  biography: string;

  @Column()
  description: string;

  @Column()
  photo_url: string;

  @Column()
  github: string;

  @Column()
  hour: string;

  @CreateDateColumn()
  createdOn: Date;

  @CreateDateColumn()
  updatedOn: Date;

  @Column({ default: false })
  isApproved: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Teacher };
