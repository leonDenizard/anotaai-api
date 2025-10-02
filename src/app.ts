import express from "express";
import visitsRoute from "./routes/visits.routes";
import swaggerConfig = require("./docs/swagger.config");

const app = express();
app.use(express.json());
app.use("/api/visits", visitsRoute);
swaggerConfig.setupSwagger(app);

export default app; // exporta o Express app puro
