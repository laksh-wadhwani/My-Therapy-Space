import express from "express"
import {Login, SignUp, verifyOtp} from "../controllers/admin.controller.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", SignUp)
router.put("/verify-otp/:email", verifyOtp)
router.post("/login", Login)

export default router