import React from "react";
import "../styles/about.css"
import RButton from "../Components/Reusable_Button";

const ContactUs = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white gap-12 items-center">

                <div className="w-full px-16 flex flex-col gap-4 mt-32">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl capitalize">contact us</h2>
                    <p className="font-serif text-center text-black text-xl">If you would like to refer your child for services, please enter your details below or give us a call or come and see us and one of our lovely receptionists will be able to talk you through the referral process for your child.</p>
                </div>

                <div className="w-[90%] px-16 flex justify-center border border-black-100 shadow-md rounded-xl py-4">
                    <div className="w-[50%]"></div>
                    <div className="w-[50%] flex flex-col gap-12 px-16 py-8 border-4 border-black rounded-xl">
                        <span className="font-serif uppercase text-2xl">contact details</span>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="guardian name" />
                            <input className="contact-inputs" type="text" placeholder="child name" />
                        </div>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="date of birth" />
                            <input className="contact-inputs" type="text" placeholder="email" />
                        </div>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="phone" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-serif text-gray-400 text-base capitalize">message</label>
                            <textarea className="w-full h-40 border-2 border-gray-400 rounded-xl"/>
                        </div>

                        <RButton className="px-6 py-4">Send Message</RButton>
                    </div>
                </div>

                <div className="w-[90%] px-16 flex flex-col items-center gap-6 border border-black-100 py-10 rounded-xl shadow-md">
                    <h2 className="font-serif text-[#0BAFA6] capitalize text-4xl text-center">our system for new referrals is as follows</h2>
                    <ol className="list-decimal pl-5 font-serif text-xl text-center flex flex-col items-center gap-4">
                        <li>Referral received via website, phone, or in person</li>
                        <li>You complete an intake form about your child’s needs, strengths, and interests</li>
                        <li>Directors review the form and match your child with the right therapist</li>
                        <li>If seeing one therapist: booked in or added to waitlist</li>
                        <li>Some families may have an intake meeting to set goals and plan therapy</li>
                        <li>Appointments are booked and therapy begins</li>
                        <li>Goals reviewed every 6–12 months to track progress</li>
                    </ol>
                </div>

            </div>
        </React.Fragment>
    )
}

export default ContactUs