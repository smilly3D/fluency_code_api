import "reflect-metadata";

import "express-async-errors";

import "./shared/container";

import { app } from "./app";

app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
