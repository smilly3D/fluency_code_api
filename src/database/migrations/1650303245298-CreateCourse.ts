import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class courses1650286444635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "courses",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "knowledge",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "trainingFor",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "teacher_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "price",
            type: "float",
            isNullable: false,
          },
          {
            name: "content_id",
            type: "varchar ",
            isNullable: false,
          },
          {
            name: "photo_url",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "students_total",
            type: "int",
            isNullable: false,
          },
          {
            name: "createdOn",
            type: "date",
            default: "now()",
          },
          {
            name: "updatedOn",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "fk_course_teacher",
            columnNames: ["teacher_id"],
            referencedTableName: "teachers",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("courses");
  }
}
