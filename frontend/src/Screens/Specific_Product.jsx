import React from "react";
import Product1 from "../assets/product1.svg"
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";

const SpecificProduct = () => {
    return(
        <React.Fragment>
            <div className="main-box gap-8 items-center">

                <h2 className="font-serif text-4xl text-[#0BAFA6] capitalize px-16 mt-32 self-start">Products</h2>

                <div className="w-full flex justify-around px-16">
                    <img src={Product1} alt="Course Video Trailer" className="w-[47.5%] max-h-[400px] rounded-xl shadow-md" />
                    <div className="w-[50%] flex flex-col justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-4xl">Visual Routine Chart Blank</h3>
                            <span className="text-xl"> Price: $8.99</span>
                        </div>
                        <p className="font-serif text-xl text-black">We can all benefit from using reminders to get through the daily routine or steps in a task. These visual routine charts are designed for this very purpose. Create unlimited interchangeable lists to insert into the board, simply using plain paper cut to size. What's best is there is a toggle on each line; as you complete each task move the toggle across from no to yes. </p>
                        <RButton>Add to Cart</RButton>
                    </div>
                </div>

                <div className="w-[90%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="w-full font-serif text-center text-black text-3xl rounded-t-md bg-[#0BAFA6] capitalize p-6">this course includes</h2>
                    <ul className="list-disc font-serif text-2xl text-black flex flex-col gap-2 px-10 py-6">
                        <li>10 places for tasks / steps in a task </li>
                        <li>Toggle no to yes after each task is completed</li>
                        <li>Fully customisable</li>
                        <li>Create lists to suit any activity or task - chores, steps in a task (e.g. brushing teeth), daily schedule, the possibilities are endless</li>
                        <li>Any paper can be printed or drawn on and used inside the chart. There are so many ways to use this!</li>
                        <li>Board measures 12 x 20 cm </li>
                        <li>Small enough to fit into a bag / easily portable</li>
                    </ul>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default SpecificProduct