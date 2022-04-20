// {
//    "type": "postgres",
//    "url": "postgres://hzfhpacfwudqun:75f3455b13b4318fa9df338ffd5a0abef61cb4a7660cf3b3253031bc88b26d58@ec2-3-218-171-44.compute-1.amazonaws.com:5432/d4um6aumqm0e1",
//    "migrations": ["./src/database/migrations/*.ts"],
//    "entities": ["./src/modules/**/entities/*.ts"],
//    "cli": {
//      "migrationsDir": "./src/database/migrations"
//    },
//    "ssl": { "rejectUnauthorized": false },

//  }

module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./build/database/migrations/*.js"],
  migrations: ["./build/modules/**/entities/*.js"],
  cli: {
    migrationsDir: "./build/database/migrations",
  },
  ssl: { rejectUnauthorized: false },
};
