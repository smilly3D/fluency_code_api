import { DB_URL } from "./src/configs";

export default {
  type: "postgres",
  url: DB_URL,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
