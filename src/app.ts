import express from "express";
import helmet from "helmet";
import cors from "cors";
import visitsRoute from "./routes/visits.routes";
import usersRoute from "./routes/users.routes";
import {setupSwagger} from "./docs/swagger.config";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors())

app.use("/api/visits", visitsRoute);
app.use("/api/users", usersRoute);

setupSwagger(app);

export default app;
