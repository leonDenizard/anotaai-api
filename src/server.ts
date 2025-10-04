import dotenv from "dotenv";
import { connectDB } from "./database/connection";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const baseUrl = process.env.NODE_ENV === "production" ? process.env.BASE_URL : 
`http://localhost:${PORT}/api`
connectDB()
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running: ${baseUrl}`);
      console.log(`API Docs: ${baseUrl}/docs`);
    });
  })
  .catch((error) => {
    console.log("Error to start server", error);
  });
