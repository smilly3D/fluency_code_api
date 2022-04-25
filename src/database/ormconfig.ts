import path from "path";
import { ConnectionOptions } from "typeorm";

import { DATABASE_URL } from "../configs";

const devConfig = {
  type: "postgres",
  url: DATABASE_URL,
  migrations: [path.join(__dirname, "./migrations/*.*")],
  entities: [path.join(__dirname, "../modules/**/entities/*.*")],
  cli: {
    migrationsDir: path.join(__dirname, "./migrations"),
  },
} as ConnectionOptions;

export default devConfig;
