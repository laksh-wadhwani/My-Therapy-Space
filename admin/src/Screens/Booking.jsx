import React, { useEffect, useState } from "react";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomTable from "../Components/CustomTable";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";
import CustomButton from "../Components/CustomButton";

const Booking = ({ isSidebarHovered }) => {

    const URL = BackendURL();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [bookings, setBookings] = useState([])
    const [booking, setBooking] = useState({})

    useEffect(() => {
        axios.get(`${URL}/api/bookings/get-all-bookings`)
            .then(response => setBookings(response.data))
            .catch(error => console.error("Getting error in fetching booking details: ", error))
    })

    const columns = [
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "date", label: "Date" },
        { key: "timing", label: "Timing" },
        { key: "status", label: "Status" }
    ];

    const bookingStatusStyles = {
        Resolved: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
    };

    const SeeBooking = bookingData => {
        setOpen(true)
        setBooking(bookingData)
    }

    const CompleteBooking = bookingId => {
        axios.put(`${URL}/api/bookings/change-status/${bookingId}`)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in resolving the booking: ", error)
                return toast.error(error.response?.data?.error)
            })
    }

    const DeleteBooking = bookingData => {
        axios.delete(`${URL}/api/bookings/delete-booking/${bookingData._id}`)
            .then(response => toast.success(response.data.message))
            .catch(error => {
                console.error("Getting error in deleting booking: ", error)
                return toast.error(error.response?.data?.error)
            })
    }


    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

                <div className="w-full p-4 mt-6 max-sm:mt-18 border-b border-gray-200 flex flex-col gap-2 max-sm:px-0">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage bookings</h1>
                    <p className="font-serif text-gray-500 text-base italic max-sm:text-sm">View, respond to and manage bookings from your website</p>
                </div>

                {(bookings.length === 0) ?
                    <p className="text-3xl font-serif font-semibold text-center italic">No Bookings have been found</p>
                    :
                    <CustomTable title="User Queries" columns={columns} data={bookings} statusStyles={bookingStatusStyles} onView={SeeBooking} onEdit={SeeBooking} onDelete={DeleteBooking} />
                }

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-full flex flex-col gap-6 w-2xl box-border pb-10">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">Booking Detail</h5>

                    <div className="w-full flex flex-col gap-2 px-6 font-serif text-lg">
                        <p><strong>First Name:</strong> {booking.firstName}</p>
                        <p><strong>Last Name:</strong> {booking.lastName}</p>
                        <p><strong>Phone No:</strong> {booking.phoneNo}</p>
                        <p><strong>Email:</strong> {booking.email}</p>
                        <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString("en-GB")}</p>
                        <p><strong>Time:</strong> {booking.timing}</p>
                    </div>

                    {(booking.status === "Pending") ?
                        <div className="w-full px-6 flex flex-col gap-2">
                            <CustomButton onClick={() => CompleteBooking(booking._id)}>Resolve</CustomButton>
                        </div> : null
                    }

                </div>

            </Modal>
        </React.Fragment>
    )
}

export default Booking