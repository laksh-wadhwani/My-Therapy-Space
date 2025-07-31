import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/footer";
import Video1 from "../assets/video1.png"
import Video2 from "../assets/video2.png"
import Video3 from "../assets/video3.png"
import Video4 from "../assets/video4.png"
import Video5 from "../assets/video5.png"
import Video6 from "../assets/video6.png"

import RButton from "../Components/Reusable_Button";

const PaidVideos = () => {

    const productsData = [
        {id: 1, title: "Speech Therapy Short Course Video", price: "$78.99", picture: Video1},
        {id: 2, title: "Occupational Therapy Course Video", price: "$50.00", picture: Video2},
        {id: 3, title: "Disable Children Tutorial Course Video", price: "$45.00", picture: Video3},
        {id: 4, title: "Demand Avoidance Course Video", price: "$18.99", picture: Video4},
        {id: 5, title: "Fine Motor Skill Course Video ", price: "$35.00", picture: Video5},
        {id: 6, title: "Pediatric Therapy Course Video", price: "$49.99", picture: Video6}
    ]

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10 items-center">
                
                <div className="w-full flex justify-between px-16 mt-32 items-center">
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
                        <Link to={`/specificVideo/${product.id}`} style={{color:"unset"}}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105">
                            <img src={product.picture} alt="Product Picture" className="w-full max-h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center px-6">
                                <h5 className="font-serif text-black text-lg text-center">{product.title}</h5>
                                <p className="font-serif text-gray-400 text-center">{product.price}</p>
                            </div>
                            <RButton className="px-10">Add to Cart</RButton>
                        </div></Link>
                    ))}
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default PaidVideos