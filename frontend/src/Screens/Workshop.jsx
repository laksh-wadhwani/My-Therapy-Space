import React from "react";
import Workshop1 from "../assets/workshop1.png"
import Workshop2 from "../assets/workshop2.png"
import Workshop3 from "../assets/workshop3.png"
import Workshop4 from "../assets/workshop4.png"
import Group1 from "../assets/group1.png"
import Group2 from "../assets/group2.png"
import Group3 from "../assets/group3.png"
import Group4 from "../assets/group4.png"
import Footer from "../Components/footer";
import { Link, useNavigate } from "react-router";
import RButton from "../Components/Reusable_Button";

const Workshop = () => {

    const navigate = useNavigate();

    const workshopTypes = [
        {image: Workshop1, description: "Accredited Key Word Sign Workshop - Basic & Intermediate "},
        {image: Workshop2, description: "An Introduction to Neurodiversity Affirming Practice"},
        {image: Workshop3, description: "Understanding Sensory"},
        {image: Workshop4, description: "Emotional Regulation"}
    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full px-16 mt-32">
                    <h2 className="font-serif text-4xl text-[#0BAFA6]">Group Therapy and Workshops</h2>
                    <p className="font-serif text-xl text-gray-400">My Therapy is passionate about sharing information through workshops. Some of the workshops we have provided include:   </p>
                </div>

                <div className="w-[90%] grid grid-cols-4 gap-8">
                    {workshopTypes.map(data => (
                        <div className="flex flex-col items-center size-full gap-4">
                            <img src={data.image} className="w-full h-40 object-contain"/>
                            <span className="font-serif text-gray-400 text-base text-center capitalize">{data.description}</span>
                        </div>
                    ))}
                </div>

                <p className="w-full font-serif text-lg text-gray-400 text-center px-16"><Link to="/currentworkshops" className="text-black underline">Click here</Link> to see what groups are currently on offer. We love suggestions and a chance to get creative so if you have any ideas for groups or workshops that you feel would benefit you and your child, please let us know and we can try and make it happen</p>

                <div className="w-[90%] px-16 grid grid-cols-4 gap-4">
                    <img src={Group1} className="border-8 border-gray-300" />
                    <img src={Group2} className="border-8 border-gray-300" />
                    <img src={Group3} className="border-8 border-gray-300" />
                    <img src={Group4} className="border-8 border-gray-300" />
                </div>

                <RButton className="px-8 py-4" onClick={() => navigate("/currentworkshops")}>View Current Groups</RButton>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Workshop;