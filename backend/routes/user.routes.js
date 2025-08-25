import express from "express"
import upload from "../middlewares/multer.js";
import { signupValidation } from "../middlewares/signupValidations.js";
import { ForgetPassword, Login, Signup, Update, verifyOtp } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/signup", upload.single("profile"), signupValidation, Signup)
router.put("/verify-otp/:email", verifyOtp)
router.post("/login", Login)
router.put("/forget-password", ForgetPassword)
router.put("/update/:id", upload.single("profile"), Update)

export default router