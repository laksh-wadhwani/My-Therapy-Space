import express from "express"
import {ApproveAdmin, BasicAnalytics, GetAdmins, GetProductDetails, Login, RejectAdmin, ResendOTP, ResetPassword, SignUp, Update, verifyOtp} from "../controllers/admin.controller.js";
import { authenticate } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";
import { signupValidation } from "../middlewares/signupValidations.js";

const router = express.Router();

router.post("/signup", upload.single("profile"), signupValidation, SignUp)
router.put("/verify-otp/:email", verifyOtp)
router.put("/resend-otp/:email", ResendOTP)
router.post("/login", Login)
router.get("/get-admins", GetAdmins)
router.put("/approve-admin/:id", ApproveAdmin)
router.put("/reject-admin/:id", RejectAdmin)
router.put("/reset-password/:email", ResetPassword)
router.put("/update/:id", upload.single("profile"), Update)
router.get("/get-product-details", GetProductDetails)
router.get("/get-analytics", BasicAnalytics)


export default router