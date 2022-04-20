"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./shared/container");
const app_1 = require("./app");
app_1.app.listen(process.env.PORT || 3333, () => console.log("Server is running"));
//# sourceMappingURL=server.js.map