import React from "react";
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";

const Cart = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10">
                <h2 className="w-full px-16 mt-32 font-serif text-4xl text-[#0BAFA6] capitalize">shopping cart</h2>

                <div className="w-full px-16 flex justify-between">

                    <div className="w-[30%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-8 px-8 py-6">
                        <h5 className="font-serif text-3xl text-black capitalize">order summary</h5>
                        <div className="flex flex-col gap-2">
                            <div className="w-full flex justify-between font-serif text-black text-lg capitalize">
                                <span>subtotal(2 items):</span>
                                <span>$58.99</span>
                            </div>
                            <div className="w-full flex justify-between font-serif text-black text-lg capitalize">
                                <span>GST: </span>
                                <span>$0</span>
                            </div>
                            <div className="w-full flex justify-between font-serif text-black text-lg capitalize">
                                <span>total: </span>
                                <span>$58.99</span>
                            </div>
                        </div>
                        <RButton className="px-8 py-2">Check Out</RButton>
                    </div>

                </div>

                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default Cart