import React from "react";
import Footer from "../Components/footer";

const Fees = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5]">
                <div className="sections flex-col gap-4 mt-20 max-sm:mt-12">
                    <span className="sections-tittle">Fees & Rates</span>
                    <h2 className="another-sections-tittle text-center font-semibold">Fee Schedule for Speech Pathology,<br/> Occupational Therapy, and Dietician</h2>                    
                </div>

                <div className="sections flex-col gap-8">

                    <div className="w-[60%] max-sm:w-full bg-white rounded-3xl flex flex-col box-border gap-4 pb-4">

                        <h4 className="bg-[#3DD4CA] font-serif text-2xl font-black py-6 px-10 rounded-t-3xl shadow-md">Regular Therapy</h4>
                        
                        <div className="flex justify-between pb-2 px-16 max-sm:px-8 border-b border-[#E7EDED]">
                            <label className="font-serif font-medium text-xl text-[#07746E]">Duration</label>
                            <label className="font-serif font-medium text-xl text-[#07746E]">Price</label>
                        </div>
                        
                        <div className="w-full flex">

                            <div className="w-[50%] flex flex-col gap-4 px-16 max-sm:px-8 item-start">
                                <span className="font-serif text-base text-black capitalize">60 minutes</span>
                                <span className="font-serif text-base text-black capitalize">45 minutes</span>
                                <span className="font-serif text-base text-black capitalize">35 minutes</span>
                                <span className="font-serif text-base text-black capitalize">paired therapy sessions</span>
                                <span className="font-serif text-base text-black capitalize">small group sessions</span>
                            </div>

                            <div className="w-[50%] flex flex-col gap-4 max-sm:gap-6 px-16 max-sm:px-8 items-end">
                                <span className="font-serif text-base text-black capitalize">$193.99</span>
                                <span className="font-serif text-base text-black capitalize">$145.49</span>
                                <span className="font-serif text-base text-black capitalize">$112.51</span>
                                <span className="font-serif text-base text-black capitalize">$129</span>
                                <span className="font-serif text-base text-black capitalize">$100</span>
                            </div>
                        </div>
                        <p className="font-serif text-sm text-gray-400 italic px-16 max-sm:px-8">Note: Different options for therapy sessions based on the time spent (face-to-face)</p>
                    </div>
                </div>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Fees