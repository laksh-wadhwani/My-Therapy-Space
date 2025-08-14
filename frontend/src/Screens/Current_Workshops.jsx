import React from "react";
import CurrentGroup1 from "../assets/current workshop1.png"
import CurrentGroup2 from "../assets/current workshop2.png"
import CurrentGroup3 from "../assets/current workshop3.png"
import CurrentGroup4 from "../assets/current workshop4.png"
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import Workshop from './Workshop';

const CurrentWorkshops = () => {

    const currentGroups = [
        {image: {CurrentGroup1}},
        {image: {CurrentGroup2}},
        {image: {CurrentGroup3}},
        {image: {CurrentGroup4}}
    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-12">

                <div className="w-full px-16 mt-32">
                    <h2 className="font-serif text-4xl capitalize text-[#0BAFA6]">Current Workshops</h2>
                    <p className="font-serif text-black text-xl">Following are the details for our current workshop groups:</p>
                </div>

                <div className="w-full px-16 flex justify-center flex-wrap gap-12">
                    {currentGroups.map(group => (
                        <img src={CurrentGroup1} alt="Group Campaign Image" className="shadow-md" />
                    ))}
                </div>

                <div className="w-full flex flex-col items-center gap-4">
                    <p className="font-serif text-2xl text-black text-center">Please contact reception if you would like us to attend one of these programs</p>
                    <RButton className="px-7 py-3">Click Here</RButton>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default CurrentWorkshops