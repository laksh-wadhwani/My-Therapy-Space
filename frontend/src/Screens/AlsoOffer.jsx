import React from "react";
import Also_Offer from "../assets/Also Offer.png"
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router";

const AlsoOffer = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5] items-center gap-4">
                <h2 className="font-serif text-3xl capitalize text-[#0BAFA6] mt-24 lg:mt-32 px-8 md:px-14 self-start">we also offer:</h2>

                <div className="w-[80%] flex flex-col items-center gap-8 xl:gap-12 p-8 xl:p-12 border border-black-300 shadow-md rounded-xl bg-white">

                    <div className="w-full flex flex-col-reverse md:flex-row items-center gap-8">
                        <ul className="list-disc pl-2 lg:pl-6 font-serif text-sm lg:text-lg xl:text-xl text-black flex flex-col gap-1 xl:gap-3 md:w-[50%]">
                            <li>Hanen ”It Takes Two to Talk”</li>
                            <li>Hanen “More than Words”</li>
                            <li>Hanen “Learning Language and Loving it”Programs.</li>
                            <li>Social Thinking Explorers Groups</li>
                            <li>Let’s Chat – A Speech Pathology Group of 4-6 year old learning AAC & Social Communication through cooking</li>
                            <li>Fun with Switches – An OT/SLP group aimed at developing social communications with switch access</li>
                            <li>Let’s Communicate – An 8 week program for parents and children aged 18 months to 3 who are late talkers</li>
                        </ul>
                        <img src={Also_Offer} alt="Also Offer Image" className="w-full md:w-[50%]" />
                    </div>
                    <Link to="/contact"><CustomButton>Get In Touch</CustomButton></Link>

                </div>

                <Footer/>

            </div>
        </React.Fragment>
    ) 
}

export default AlsoOffer
