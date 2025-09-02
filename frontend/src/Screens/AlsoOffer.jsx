import React from "react";
import Also_Offer from "../assets/Also Offer.png"
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";

const AlsoOffer = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-8">
                <h2 className="font-serif text-4xl max-sm:text-3xl capitalize text-[#0BAFA6] mt-32 max-sm:mt-24 px-16 max-sm:px-8 self-start">we also offer:</h2>

                <div className="w-[80%] flex flex-col items-center gap-12 p-10 border border-black-300 shadow-md rounded-xl">

                    <div className="w-full flex items-center gap-8">
                        <ul className="list-disc pl-5 max-sm:pl-2 font-serif text-2xl max-sm:text-base text-black text-justify flex flex-col gap-2 max-sm:gap-1">
                            <li>Hanen ”It Takes Two to Talk”</li>
                            <li>Hanen “More than Words”</li>
                            <li>Hanen “Learning Language and Loving it”Programs.</li>
                            <li>Social Thinking Explorers Groups</li>
                            <li>Let’s Chat – A Speech Pathology Group of 4-6 year old learning AAC & Social Communication through cooking</li>
                            <li>Fun with Switches – An OT/SLP group aimed at developing social communications with switch access</li>
                            <li>Let’s Communicate – An 8 week program for parents and children aged 18 months to 3 who are late talkers</li>
                        </ul>
                        <img src={Also_Offer} alt="Also Offer Image" className="max-sm:hidden" />
                    </div>
                    <Link to="/contact"><CustomButton>Get In Touch</CustomButton></Link>

                </div>

                <Footer/>

            </div>
        </React.Fragment>
    ) 
}

export default AlsoOffer