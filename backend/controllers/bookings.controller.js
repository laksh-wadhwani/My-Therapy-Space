import { transporter } from "../config/mailer.js"
import BookingModel from "../models/Bookings.js"
import {bookingAdminTemplate, bookingUserTemplate} from "../utils/emailTemplates.js"

export const BookACall = async (request, response) => {
    try {
        const { firstName, lastName, email, phoneNo, date, timing } = request.body

        const bookingDateTime = new Date(`${date}T${timing}`)
        const day = bookingDateTime.getDay()
        const hours = bookingDateTime.getHours();
        const minutes = bookingDateTime.getMinutes()

        if (day === 0 || day === 6)
            return response.status(400).json({ error: "These are not our working days. Please select a date between Monday and Friday." })

        const totalMinutes = (hours * 60) + minutes
        const startTime = 9 * 60
        const endTime = 17 * 60

        if (totalMinutes < startTime || totalMinutes > endTime)
            return response.status(400).json({ error: "These are not our working hours. Please select a time between 9:00 AM and 5:00 PM." })

        const booking = await BookingModel.findOne({ firstName, lastName, date, timing })
        if (booking) {
            if (booking.status === "Pending")
                return response.status(409).json({ error: "You already have a pending booking request. Please wait for confirmation." })
            if (booking.status === "Resolved")
                return response.status(400).json({ error: "This time slot has already been completed. Please select another date or time." })
        }

        const isTimeSlotAvailable = await BookingModel.findOne({ date, timing })
        if (isTimeSlotAvailable)
            return response.status(400).json({ error: "This time slot has already been booked. Please select another timing." })

        const newBooking = new BookingModel({
            firstName,
            lastName,
            email,
            phoneNo,
            date,
            timing
        })
        await newBooking.save();

        await transporter.sendMail({
            from: email,
            to: process.env.SMTP_MAIL,
            subject: "New Call Booking Request",
            html: bookingAdminTemplate(firstName, lastName, email, phoneNo, date, timing)
        });

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: email,
            subject: "Your Call Booking Request",
            html: bookingUserTemplate(firstName, date, timing)
        });

        return response.status(201).json({ message: "Your booking request has been submitted successfully." })

    } catch (error) {
        console.log("Getting error in booking a call: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetAllBookings = async (request, response) => {
    try {
        const bookings = await BookingModel.find();

        if (!bookings)
            return response.status(400).json({ error: "No Bookings found" })

        return response.status(201).json(bookings)

    } catch (error) {
        console.log("Getting error in fetching all booking details: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetSpecificBooking = async (request, response) => {
    try {
        const { id } = request.params
        const booking = await BookingModel.findById(id)
        if (!booking)
            return response.status(400).json({ error: "No booking found" })
        return response.status(201).json(booking)
    } catch (error) {
        console.log("Getting error in fetching specific booking detail: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const ChangeStatus = async (request, response) => {
    try {
        const { id } = request.params
        const booking = await BookingModel.findById(id)

        if (booking.status === "Resolved")
            return response.status(400).json({ error: "This booking has already been resolved" })

        booking.status = "Resolved"
        await booking.save();
        return response.status(201).json({ message: "The booking has resolved successfully" })

    } catch (error) {
        console.log("Getting error in updating status of booking: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const DeleteBooking = async (request, response) => {
    try {
        const { id } = request.params
        const booking = await BookingModel.findByIdAndDelete(id)

        if (!booking)
            return response.status(400).json({ error: "No booking found" })

        return response.status(201).json({ message: "The booking has deleted successfully" })
    } catch (error) {
        console.log("Getting error in deleting booking: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}