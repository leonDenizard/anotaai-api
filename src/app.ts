import express from "express";
import visitsRoute from "./routes/visits.routes";
import usersRoute from "./routes/users.routes";
import swaggerConfig = require("./docs/swagger.config");

const app = express();
app.use(express.json());
app.use("/api/visits", visitsRoute);
app.use("/api/users", usersRoute);
swaggerConfig.setupSwagger(app);

export default app;
