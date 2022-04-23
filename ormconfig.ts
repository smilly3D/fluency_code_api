import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

const devConfig = {
  type: "postgres",
  url: process.env.DB_URI,
  migrations: ["./src/database/migrations/*.ts"],
  entities: ["./src/modules/**/entities/*.ts"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
} as ConnectionOptions;

export default devConfig;
