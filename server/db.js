import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
   await mongoose.connect(process.env.CONNECTION_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log("ERROR TO CONNECT DB");
    console.log(error);
  }
};

export default connectDB;
