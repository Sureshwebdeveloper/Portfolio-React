import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adminRouter from "./routes/projectRoute.js";
import connectDB from "./db.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || PORT;

// MiddleWare
app.use(cors());
app.use(express.json());

connectDB();

// Api End Point
app.use("/auth", authRouter);
app.use("/images", express.static("uploads"));
app.use("/api/project", adminRouter);

app.listen(PORT, () => {
  console.log(`Your App Running On http://localhost:${PORT}/`);
});
