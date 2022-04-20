import 'reflect-metadata'
import { app } from "./app";

import './shared/container'

app.listen(3333, () => console.log("Server is running"));
