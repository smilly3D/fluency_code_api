import { DB_URI } from "./src/configs";

export default {
  type: "postgres",
  url: DB_URI,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};
