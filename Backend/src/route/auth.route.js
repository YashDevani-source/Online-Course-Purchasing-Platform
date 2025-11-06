import express from "express";
import { signUp, login, logout, check } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login)
authRouter.post("/logout", logout)
authRouter.post("/check-auth",check)
export default authRouter