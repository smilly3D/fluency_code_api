import "reflect-metadata";

import "express-async-errors";

import "./shared/container";

import { app } from "./app";
import { PORT } from "./configs";

app.listen(PORT, () => console.log("Server is running"));
