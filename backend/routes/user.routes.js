import express from "express"
import upload from "../middlewares/multer.js";
import { signupValidation } from "../middlewares/signupValidations.js";
import { BookingDetailsForUser, ChangeProfile, ForgetPassword, GetSpecificUser, Login, Signup, Update, verifyOtp } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/signup", signupValidation, Signup)
router.put("/verify-otp/:email", verifyOtp)
router.post("/login", Login)
router.put("/forget-password", ForgetPassword)
router.put("/update/:id", Update)
router.put("/change-profile/:id", upload.single("profile"), ChangeProfile)
router.get("/get-user/:id", GetSpecificUser)
router.get("/get-booking-details/:email", BookingDetailsForUser)

export default router