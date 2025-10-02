import express from "express"
import dotenv from "dotenv";

import { connectDB } from "./database/connection"

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT}`)
      console.log(`API Docs: http://localhost:${PORT}/docs`)
    })
  }).catch((error) => {
    console.log("Error to start server", error)
  })

app.listen(PORT, () => console.log(`Local server running ${PORT}`))