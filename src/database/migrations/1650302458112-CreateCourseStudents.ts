import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCourseStudents1650302458112 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "course_students",
        columns: [
          {
            name: "student_id",
            type: "uuid",
          },
          {
            name: "course_id",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "course_students",
      new TableForeignKey({
        name: "FKCourseStudents",
        referencedTableName: "courses",
        referencedColumnNames: ["id"],
        columnNames: ["course_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "course_students",
      new TableForeignKey({
        name: "FKStudentsCourse",
        referencedTableName: "students",
        referencedColumnNames: ["id"],
        columnNames: ["student_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("course_students", "FKStudentsCourse");

    await queryRunner.dropForeignKey("course_students", "FKCourseStudents");

    await queryRunner.dropTable("course_students");
  }
}
