import React from "react";
import BookingGirl from "../assets/booking girl.svg"
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router"
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"

const Booking = () => {

    const URL = BackendURL();
    const navigate = useNavigate();
    const [bookingDetails, setBookingDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        date: Date.now(),
        timing: Date.now()
    })

    const handleChange = eventTriggered => {
        const { name, value } = eventTriggered.target
        setBookingDetails({
            ...bookingDetails,
            [name] : value
        })
    }

    const BookACall = () => {
        axios.post(`${URL}/api/bookings/book-a-call`, bookingDetails)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate("/")}, 2500)
        })
        .catch(error => {
            console.log("Getting error in booking a call: ",error)
            return toast.error(error?.response?.data?.error)
        })
    }

    return(
        <React.Fragment>
            <div className="main-box bg-white">
                <div className="w-full px-16 mt-32">
                    <h2 className="font-serif text-4xl capitalize text-[#0BAFA6]">Book A Phone Appointment </h2>
                    <p className="font-serif text-xl text-black">Please enter a few details to book a phone appointment with one of our friendly client care team</p>
                </div>

                <div className="w-full flex justify-between pl-16">
                    <div className="w-ful flex flex-col gap-4 mt-32">

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-8 flex flex-col gap-8">
                            <div className="w-full flex justify-between">
                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">first name</label>
                                    <input type="text" className="booking-inputs" name="firstName" value={bookingDetails.firstName} onChange={handleChange} />
                                </div>

                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">last name</label>
                                    <input type="text" className="booking-inputs" name="lastName" value={bookingDetails.lastName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="w-full flex justify-between">
                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">email</label>
                                    <input type="email" className="booking-inputs" name="email" value={bookingDetails.email} onChange={handleChange} />
                                </div>

                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">phone no</label>
                                    <input type="tel" className="booking-inputs" name="phoneNo" value={bookingDetails.phoneNo} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="w-full flex justify-between">
                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">date</label>
                                    <input type="date" className="booking-inputs" name="date" value={bookingDetails.date} onChange={handleChange} />
                                </div>

                                <div className="w-[47.5%] font-serif text-black">
                                    <label className="text-base capitalize">available timings</label>
                                    <input type="time" className="booking-inputs" name="timing" value={bookingDetails.timing} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-2 font-serif text-xl text-gray-500">
                                <span className="font-semibold">Terms and Conditions</span>
                                <p> One of our client care team members will call the number you have provided at the appointment time.<br/>Please advise at least 1hr prior if you wish to cancel or reschedule your phone appointment.<br/>Upon confirming, your personal details will be sent securely to My Therapy Space. Please review and accept the privacy policy of My Therapy Space and click I reviewed and I accept.</p>
                            </div>

                            <RButton className="px-8 py-2" onClick={BookACall}>Submit</RButton>

                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <span className="font-serif text-xl text-black">Suite 3AB, Treetops Square,2 Classic Way Burleigh Waters Queensland 4220.</span>
                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <span className="font-serif text-xl text-black">0755599888</span>
                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                            <span className="font-serif text-xl text-black"> www.mytherapyspace.com.au</span>
                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="font-serif text-xl text-black">Mon to Fri: 08:00 AM - 05:00PM<br/>Sat to Sun: Closed</span>
                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="size-8">
                                <path d="M200 104C200 73.1 225.1 48 256 48C286.9 48 312 73.1 312 104C312 134.9 286.9 160 256 160C225.1 160 200 134.9 200 104zM181.9 261.6L194.5 324.6C155.9 337 128 373.3 128 416C128 469 171 512 224 512C259.6 512 290.7 492.6 307.3 463.8C309.6 463.9 311.9 464 314.3 464L318.4 464C319.4 464 320.5 464 321.5 464L376.7 464C356.3 528.9 295.7 576 224 576C135.6 576 64 504.4 64 416C64 342.2 114 280.1 181.9 261.6zM330.5 233.5L354.2 352L414.7 352C448 352 477.9 372.7 489.6 403.9L515.1 471.9L533.8 465.7C550.6 460.1 568.7 469.2 574.3 485.9C579.9 502.6 570.8 520.8 554.1 526.4L506.1 542.4C489.8 547.8 472.1 539.4 466 523.3L429.7 426.4C427.4 420.2 421.4 416 414.7 416L328.6 416C328.2 416 327.8 416 327.3 416L314.2 416C283.7 416 257.4 394.5 251.4 364.6L229.3 253.7C222.9 221.8 247.3 192 279.9 192C304.5 192 325.7 209.4 330.5 233.5z"/>
                            </svg>
                            <span className="font-serif text-xl text-black">Accessibility </span>
                        </div>

                        <div className="w-full border border-gray-300 rounded-xl shadow-md p-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>

                            <span className="font-serif text-xl text-black">Amenities</span>
                        </div>

                    </div>
                    <img src={BookingGirl} alt="Booking Girl Picture" loading="lazy" />
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Booking