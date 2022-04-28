import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("course")
export class Courses {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  knowledge: string;

  @Column()
  trainingFor: string;

  @Column()
  teacher_id: string;

  @Column()
  price: number;

  @Column()
  content_id: string;

  @Column()
  photo_url: string;

  @Column()
  students_total: number;

  @CreateDateColumn()
  createdOn: Date;

  @CreateDateColumn()
  updatedOn: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
