import dotenv from "dotenv";

dotenv.config();

const { PORT } = process.env;

const JWT_CONFIG = {
  SECRET_KEY: process.env.SECRET_KEY ?? "",
  EXPIRES_IN: process.env.EXPIRES_IN,
};

const { DB_URL } = process.env;

const { HOST } = process.env;

export { JWT_CONFIG, DB_URL, PORT, HOST };
