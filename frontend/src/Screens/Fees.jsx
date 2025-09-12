import React from "react";
import Footer from "../Components/footer.jsx"
import { Mail, Phone } from "lucide-react";

const Fees = () => {
    return (
        <React.Fragment>
            <div className="bg-[#E0F4F5] w-full flex flex-col items-center gap-10 py-20 px-6">
                <h1 className="font-serif text-4xl max-sm:text-3xl uppercase text-[#0BAFA6] text-center mt-8">
                    Fee Schedule For Speech Pathology, Occupational Therapy, And Dietician
                </h1>


                <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#0BAFA6] p-4">
                        <h2 className="text-white font-serif font-bold text-xl">
                            Getting Started – Our Initial Appointment
                        </h2>
                    </div>
                    <div className="p-6 font-serif text-gray-700 text-base">
                        <p className="mb-4">
                            Our first session is a little longer, allowing us to properly get to
                            know your child and their needs. We allow 90 minutes in total for
                            this appointment, consisting of 60 minutes face-to-face with you and
                            your child and 30 minutes behind the scenes…
                        </p>
                        <p className="font-bold">$290.98 (90 minutes + 30 minutes admin)</p>
                    </div>
                </div>


                <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#0BAFA6] p-4">
                        <h2 className="text-white font-serif font-bold text-xl">
                            Regular Therapy Session Fees – Individual Therapy
                        </h2>
                    </div>
                    <table className="w-full text-left font-serif">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4">Session</th>
                                <th className="p-4">Duration</th>
                                <th className="p-4">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">Extended Session</td>
                                <td className="p-4">90 min (75 min face to face + 15 min indirect)</td>
                                <td className="p-4 font-bold">$290.70</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Standard Session</td>
                                <td className="p-4">65 min (50 min face to face + 15 min indirect)</td>
                                <td className="p-4 font-bold">$209.95</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4">Optional Session</td>
                                <td className="p-4">50 min (40 min face to face + 10 min indirect)</td>
                                <td className="p-4 font-bold">$161.50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#0BAFA6] p-4">
                        <h2 className="text-white font-serif font-bold text-xl">
                            Paired & Small Group Therapy
                        </h2>
                    </div>
                    <table className="w-full text-left font-serif">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4">Session Type</th>
                                <th className="p-4">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4">Paired Therapy (per hour)</td>
                                <td className="p-4 font-bold">$129</td>
                            </tr>
                            <tr>
                                <td className="p-4">Small Group Therapy (per hour)</td>
                                <td className="p-4 font-bold">$97</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#0BAFA6] p-4">
                        <h2 className="text-white font-serif font-bold text-xl">
                            Other Services & Travel
                        </h2>
                    </div>
                    <div className="p-6 font-serif text-gray-700 text-base">
                        <p className="mb-4">
                            There will be charges for the following services (reports, resource
                            and funding applications, letters and emails to other members of
                            your child’s team, designing individual resources & clinical
                            liaison): <span className="font-bold">$193.99 per hour</span>
                        </p>
                        <p>
                            <span className="font-bold">$32.33</span> added for each 10 minutes
                            of travel and <span className="font-bold">$0.99</span> per kilometre
                            travelled.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-[#0BAFA6] p-4">
                        <h2 className="text-white font-serif font-bold text-xl">
                            Cancellation Policy
                        </h2>
                    </div>
                    <div className="p-6 font-serif text-gray-700 text-base space-y-4">
                        <p>
                            At My Therapy Space, we strive to provide the best possible service
                            to all our valued clients. We understand that plans may change
                            unexpectedly, and we want to accommodate such situations as much as
                            possible. However, to ensure the smooth operation of our business
                            and maintain the high-quality service that our clients expect, we
                            have formulated the following cancellation policy:
                        </p>

                        <h3 className="font-semibold text-[#0BAFA6]">Cancellation Fee</h3>
                        <p>
                            Should you need to cancel your appointment, a 100% cancellation fee
                            will be charged unless we receive a minimum of 48 business hours’
                            notice before the scheduled date and time.
                        </p>

                        <h3 className="font-semibold text-[#0BAFA6]">No Charge for Filled Appointments</h3>
                        <p>
                            If we are able to fill the cancelled appointment with another client
                            there will be no cancellation fee.
                        </p>

                        <h3 className="font-semibold text-[#0BAFA6]">Definition of Business Hours</h3>
                        <p>
                            Our business hours are defined as 8:00am to 5:00pm, Monday to Friday.
                            Please note that weekends and public holidays are excluded from business
                            hours.
                        </p>

                        <h3 className="font-semibold text-[#0BAFA6]">Notice Requirements</h3>
                        <p>
                            To provide sufficient time for us to accommodate other clients or
                            make necessary adjustments to our schedule, cancellation requests must
                            be submitted in writing via:
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="text-[#0BAFA6]" />
                                <a
                                    href="mailto:reception@mytherapyspace.com.au"
                                    className="text-[#0BAFA6] underline"
                                >
                                    reception@mytherapyspace.com.au
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="text-[#0BAFA6]" />
                                <a href="tel:0755599888" className="text-[#0BAFA6] underline">
                                    07 5559 9888
                                </a>
                            </li>
                        </ul>

                        <p>
                            We understand that policies like these can seem rigid, but they allow us
                            to operate efficiently and offer exceptional service to all our clients.
                            We appreciate your understanding and cooperation in adhering to our
                            cancellation policy. If you have any questions or concerns, please don’t
                            hesitate to reach out to our admin team.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Fees;
