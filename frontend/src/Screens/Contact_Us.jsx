import React from "react";

const ContactUs = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white gap-12 items-center">

                <div className="w-full px-16 flex flex-col gap-4 mt-32">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl capitalize">contact us</h2>
                    <p className="font-serif text-center text-black text-xl">If you would like to refer your child for services, please enter your details below or give us a call or come and see us and one of our lovely receptionists will be able to talk you through the referral process for your child.</p>
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