import express from "express"
import {ApproveAdmin, GetAdmins, Login, SignUp, verifyOtp} from "../controllers/admin.controller.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { signupValidation } from "../middlewares/signupValidations.js";

const router = express.Router();

router.post("/signup", upload.single("profile"), signupValidation, SignUp)
router.put("/verify-otp/:email", verifyOtp)
router.post("/login", Login)
router.get("/get-admins", GetAdmins)
router.put("/approve-admin/:id", ApproveAdmin)

export default router