import "reflect-metadata";

import "express-async-errors";

import "./shared/container";

import { app } from "./app";
import { PORT } from "./configs";

app.listen(PORT || 3333, () => console.log("Server is running"));
