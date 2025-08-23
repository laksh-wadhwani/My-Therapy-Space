import express from "express"
import { BookACall, ChangeStatus, DeleteBooking, GetAllBookings, GetSpecificBooking } from "../controllers/bookings.controller.js";

const router = express.Router();

router.post("/book-a-call", BookACall)
router.get("/get-all-bookings", GetAllBookings)
router.get("/get-specific-booking", GetSpecificBooking)
router.put("/change-status/:id", ChangeStatus)
router.delete("/delete-booking/:id", DeleteBooking)

export default router