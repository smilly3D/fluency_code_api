import { createConnection, getConnectionOptions } from "typeorm";
import { HOST } from "../configs";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = HOST;
  createConnection({
    ...options,
  });
});
