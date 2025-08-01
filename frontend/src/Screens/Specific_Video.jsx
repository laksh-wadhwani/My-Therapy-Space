import React from "react";
import Video1 from "../assets/video2.png"
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";

const SpecificVideo = () => {
    return(
        <React.Fragment>
            <div className="main-box gap-8 items-center">

                <h2 className="font-serif text-4xl text-[#0BAFA6] capitalize px-16 mt-32 self-start">course videos</h2>

                <div className="w-full flex justify-around px-16">
                    <img src={Video1} alt="Course Video Trailer" className="w-[47.5%] max-h-[400px] rounded-xl shadow-md" />
                    <div className="w-[50%] flex flex-col justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-4xl">Occupational Therapy Course Video</h3>
                            <span className="text-xl">Price: $50.00</span>
                            <span className="text-xl">Instructor: Cathy Trace</span>
                        </div>
                        <p className="font-serif text-xl text-black">Occupational Therapy is aimed at ensuring anyone can do what they want to do, need to do or are expected to do. For children that often means helping them socialise, learn and play. The following is a list of areas our dedicated Occupational Therapists can help your child thrive in.</p>
                        <RButton>Add to Cart</RButton>
                    </div>
                </div>

                <div className="w-[90%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="w-full font-serif text-center text-black text-3xl rounded-t-md bg-[#0BAFA6] capitalize p-6">this course includes</h2>
                    <ul className="list-disc font-serif text-2xl text-black flex flex-col gap-2 px-10 py-6">
                        <li>Fine motor – Fine motor skills encompass a huge range of qualities from dexterity and strength to hand-eye coordination. </li>
                        <li>Self-care skills – This course can help your child learn to care for themselves, their bodies and personal health and hygiene. </li>
                        <li>Gross motor – Using playground equipment can require not only physical capabilities but cognitive skills such as motor planning or problem solving. </li>
                        <li>School Skills – This course can help your child prepare for their new school adventure through the development of these skills.</li>
                        <li>Play –This Course can help your child develop these skills and introduce them to the magical world of play. </li>
                    </ul>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default SpecificVideo