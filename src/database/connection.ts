import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
  throw new Error("MONGO_URI not configured")
}

export const connectDB = async () => {
  
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("DB Connected");
  
  } catch (error) {
    console.error("Error to the connect DB", error);
    process.exit(1);
  }
};