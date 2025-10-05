import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
  throw {message: "URI not configured", statusCode: 500}
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