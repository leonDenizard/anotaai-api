import dotenv from "dotenv";
import { connectDB } from "./database/connection";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT}`);
      console.log(`API Docs: http://localhost:${PORT}/docs`);
    });
  })
  .catch((error) => {
    console.log("Error to start server", error);
  });
