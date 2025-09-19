import express from "express"
import upload from "../middlewares/multer.js";
import { signupValidation } from "../middlewares/signupValidations.js";
import { BookingDetailsForUser, ChangeProfile, GetProductDetails, GetSpecificUser, Login, ResendOTP, ResetPassword, Signup, Update, verifyOtp } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/signup", signupValidation, Signup)
router.put("/verify-otp/:email", verifyOtp)
router.put("/resend-otp/:email", ResendOTP)
router.post("/login", Login)
router.put("/reset-password/:email", ResetPassword)
router.put("/update/:id", Update)
router.put("/change-profile/:id", upload.single("profile"), ChangeProfile)
router.get("/get-user/:id", GetSpecificUser)
router.get("/get-booking-details/:email", BookingDetailsForUser)
router.get("/get-product-details/:id", GetProductDetails)

export default router