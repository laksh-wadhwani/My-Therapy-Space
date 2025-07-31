import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/footer";
import Product1 from "../assets/product1.svg"
import Product2 from "../assets/product2.svg"
import Product3 from "../assets/product3.svg"
import RButton from "../Components/Reusable_Button";

const PaidVideos = () => {

    const productsData = [
        {id: 1, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
        {id: 2, title: "2 Year Old Circle Time Board", price: "$8.82", picture: Product2},
        {id: 3, title: "10 Interactive Song Boards", price: "$7.00", picture: Product3},
        {id: 4, title: "Visual Routine Chart Blank", price: "$8.99", picture: Product1},
        {id: 5, title: "2 Year Old Circle Time Board", price: "$8.82", picture: Product2},
        {id: 6, title: "10 Interactive Song Boards", price: "$7.00", picture: Product3}
    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10 items-center">
                
                <div className="w-full flex justify-between px-16 mt-32">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl capitalize">Course Videos</h2>
                    <div className="w-[25%] flex">
                        <input
                            type="text"
                            placeholder="search for products"
                            className="w-full border border-gray-300 rounded-md font-serif text-base capitalize p-3 focus:outline-none "
                        />
                        <button className="relative right-16 bg-[#0BAFA6] rounded-r-md rounded-none hover:border-[#0BAFA6] focus:outline-none hover:bg-transparent">
                            <MagnifyingGlassIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-wrap px-16 gap-16">
                    {productsData.map(product => (
                        <div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center gap-4 pb-4">
                            <img src={product.picture} alt="Product Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center">
                                <h5 className="font-serif text-black text-lg text-center">{product.title}</h5>
                                <p className="font-serif text-gray-400 text-center">{product.price}</p>
                            </div>
                            <RButton className="px-10">Add to Cart</RButton>
                        </div>
                    ))}
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default PaidVideos