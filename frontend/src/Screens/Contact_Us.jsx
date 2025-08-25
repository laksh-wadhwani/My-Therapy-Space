import React, { useState } from "react";
import "../styles/about.css"
import Footer from "../Components/footer"
import RButton from "../Components/Reusable_Button";
import PhoneIcon from "../assets/phone icon.svg"
import LocationIcon from "../assets/location icon.svg"
import axios from "axios"
import { BackendURL } from "../BackendContext";
import { toast } from "react-toastify"
import {useNavigate} from "react-router"
import Contact_Us from "../assets/contact_us.jpg"

const ContactUs = () => {
    
    const URL = BackendURL();
    const navigate = useNavigate();
    const [query, setQuery] = useState({
        guardianName: "",
        childName: "",
        phoneNo: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = eventTriggered => {
        const {name, value} = eventTriggered.target
        setQuery({
            ...query,
            [name]: value
        })
    }

    const SendQuery = () => {
        axios.post(`${URL}/api/queries/send-query`, query)
        .then(response => {
           toast.success(response.data.message)
           setTimeout(() => {navigate("/")},2500)
        })
        .catch(error => {
            console.error("Getting error in sending query: ",error)
            return toast.error(error?.response?.data?.error)
        })
    }

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-12 items-center">

                <div className="w-full px-16 flex flex-col gap-4 mt-32">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl capitalize">contact us</h2>
                    <p className="font-serif text-center text-black text-xl">If you would like to refer your child for services, please enter your details below or give us a call or come and see us and one of our lovely receptionists will be able to talk you through the referral process for your child.</p>
                </div>

              <div className="w-[90%] px-0 flex justify-between items-stretch border border-black-100 shadow-md rounded-xl py-0">

                    <div className="w-1/2">
                       
                            <img 
                                src={Contact_Us} 
                                alt="Therapist and child illustration"
                                className="w-full h-full object-cover rounded-l-xl"
                            />
                                                
                        {/* <div className="w-full flex flex-col border border-black-100 shadow-md p-8 rounded-xl">
                            <span className="font-serif text-2xl uppercase text-black border-b border-black pb-1">contact information</span>

                            <div className="w-full flex flex-wrap">

                                <div className="flex items-center">
                                    <img src={PhoneIcon} alt="Phone Icon" className="w-8 h-8" />
                                    <div className="">
                                        <span className="font-serif text-lg text-black">Phone</span>
                                        <span className="font-serif text-lg text-gray-400">07 5559 9888</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <img src={LocationIcon} alt="Phone Icon" />
                                    <div className="flex flex-col">
                                        <span className="font-serif text-base text-black">Burleigh Waters</span>
                                        <span className="font-serif text-base text-gray-400">Suite 3AB/2 Classic Way, Burleigh Waters, QLD 4220</span>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <img src={LocationIcon} alt="Phone Icon" />
                                    <div className="flex flex-col">
                                        <span className="font-serif text-lg text-black">Hope Island</span>
                                        <span className="font-serif text-lg text-gray-400">12 Halcyon Way Hope Island Qld 4212</span>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                    </div>
                   <div className="w-1/2 flex flex-col gap-12 px-8 md:px-16 py-8 ">
                        <span className="font-serif uppercase text-2xl">contact details</span>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="Guardian Name" name="guardianName" value={query.guardianName} onChange={handleChange} />
                            <input className="contact-inputs" type="text" placeholder="Child Name" name="childName" value={query.childName} onChange={handleChange} />
                        </div>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="Phone" name="phoneNo" value={query.phoneNo} onChange={handleChange} />
                            <input className="contact-inputs" type="email" placeholder="Email" name="email" value={query.email} onChange={handleChange} />
                        </div>

                        <div className="w-full flex justify-between">
                            <input className="contact-inputs" type="text" placeholder="Subject" name="subject" value={query.subject} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-serif text-gray-400 text-base capitalize">message</label>
                            <textarea className="w-full h-40 border-2 border-gray-400 rounded-xl p-4" name="message" value={query.message} onChange={handleChange}/>
                        </div>

                        <RButton className="px-6 py-4" onClick={SendQuery}>Send Message</RButton>
                    </div>
                </div>

                <div className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col gap-6 bg-white rounded-2xl shadow-lg">
  <h2 className="font-serif text-[#0BAFA6] text-3xl text-center">Our system for new referrals</h2>

  <div className="flex flex-col gap-4 mt-6">
    {[
      "Referral received via website, phone, or in person",
      "Complete an intake form about your child’s needs, strengths, and interests",
      "Directors review the form and match your child with the right therapist",
      "If seeing one therapist: booked in or added to waitlist",
      "Some families may have an intake meeting to set goals and plan therapy",
      "Appointments are booked and therapy begins",
      "Goals reviewed every 6–12 months to track progress"
    ].map((step, index) => (
      <div 
        key={index} 
        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-[#e0f7f6] transition cursor-pointer"
      >
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0BAFA6] to-[#00C9A7] text-white font-bold">
          {index + 1}
        </div>
        <p className="text-base font-serif">{step}</p>
      </div>
    ))}
  </div>
</div>


                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default ContactUs