import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "ec2-3-218-171-44.compute-1.amazonaws.com";
  createConnection({
    ...options,
  });
});
