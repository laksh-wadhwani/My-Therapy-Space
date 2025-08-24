import mongoose from "mongoose"

const BookingSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phoneNo: String,
        date: Date,
        timing: String,
        status: {type: String, enum:["Pending", "Resolved"], default: "Pending"}
    }, 
    { timestamps: true }
)

const BookingModel = mongoose.model("Bookings", BookingSchema)

export default BookingModel