import express from "express";
import { loginUser, newUser, sendEmail } from "../controller/authController.js";
const authRouter = express.Router();

authRouter.post("/signup", newUser);
authRouter.post("/login", loginUser);
authRouter.post("/send-email", sendEmail);

export default authRouter;
