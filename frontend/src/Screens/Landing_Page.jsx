import React from "react";
import RightSide from "../assets/rightside.svg"

const LandingPage = () => {
    return(
        <React.Fragment>
            <div className="w-full overflow-x-hidden bg-[#E0F4F5]">

                <div className="w-full h-[950px] bg-[url(./assets/Section1.svg)] bg-center bg-no-repeat bg-cover flex items-center justify-between gap-14">

                    <div className="flex flex-col gap-20 w-[50%] px-14 items-start">
                        
                        <div className="flex flex-col gap-6">
                            <h1 className="text-7xl font-serif">Specialized therapy for <span className="text-[#01B2A9]">every child</span></h1>
                            <div className="bg-[#92278F] w-20 h-1 rounded-xl"></div>
                            <p className="font-serif text-[#666666] text-lg">A team of specialized therapists working together to help your child to thrive in Burleigh Waters and Hope Island.</p>
                        </div>
                        <button className="bg-[#00B2A9] text-white rounded-full px-7 py-3 font-serif text-base">Book a Call</button>
                
                    </div>

                    <div className="w-[50%] h-full bg-[url(./assets/rightside.svg)] bg-no-repeat bg-contain bg-center"></div>


                </div>

            </div>
        </React.Fragment>
    )
}

export default LandingPage