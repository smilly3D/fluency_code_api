// export default {
//   type: "postgres",
//   port: 5432,
//   host: "localhost",
//   username: "docker",
//   password: "fluency",
//   database: "fluency-code",
//   migrations: ["./src/database/migrations/*.ts"],
//   entities: ["./src/modules/**/entities/*.ts"],
//   cli: {
//     migrationsDir: "./src/database/migrations",
//   },
// };
const productionEnv = {
    type: "postgres",
    port: 5432,
    url: process.env.DATABASE_URL,
    entities: ["./dist/modules/**/entities/*.js"],
    migrations: ["./dist/database/migrations/*.ts"],
    cli: {
        migrationsDir: "./dist/src/migrations",
    },
};
const developmentEnv = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
    synchronize: true,
    logging: false,
    ssl: false,
};
module.exports =
    process.env.NODE_ENV === "production" ? productionEnv : developmentEnv;
//# sourceMappingURL=ormconfig.js.map