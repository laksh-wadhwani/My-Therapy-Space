import React from "react";
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import Product1 from "../assets/product1.svg"
import Video1 from "../assets/video1.png"

const Cart = () => {

    const cartData = [
        {id: 1, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
        {id: 2, title: "Occupational Therapy Course Video", price: "$50.00", picture: Video1},
        {id: 3, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
        {id: 4, title: "Occupational Therapy Course Video", price: "$50.00", picture: Video1},
        {id: 5, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
        {id: 6, title: "Occupational Therapy Course Video", price: "$50.00", picture: Video1},
    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10">
                <h2 className="w-full px-16 mt-32 font-serif text-4xl text-[#0BAFA6] capitalize">shopping cart</h2>

                <div className="w-full px-16 flex justify-between items-start">

                    <div className="w-[65%] flex flex-col gap-6">
                         {cartData.map(data => (
                            <div className="w-full border border-gray-300 rounded-xl shadow-md py-3 px-8 flex justify-between items-center">
                                <div className="w-[80%] flex items-start gap-4">
                                    <img src={data.picture} alt="Product Picture" className="w-[40%] rounded-xl max-h-40" />
                                    <div className="flex flex-col font-serif text-black capitalize">
                                        <span className="text-2xl">{data.title}</span>
                                        <span className="text-xl">Price: {data.price}</span>
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 bg-red">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        ))}
                    </div>

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