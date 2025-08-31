import React from "react";
import Footer from "../Components/footer";
import ShopProducts from "../assets/shop products.png"
import ShopVideos from "../assets/shop videos.png"
import RButton from "../Components/Reusable_Button";
import { Link } from "react-router";

const Shop = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full px-16 max-sm:px-8 mt-32 max-sm:mt-24">
                    <h2 className="font-serif text-4xl max-sm:text-3xl text-[#0BAFA6] capitalize">Shopping</h2>
                    <p className="font-serif text-black text-xl max-sm:text-base capitalize">Welcome to My Therapy Space Shopping Area Please Select one of the below categories</p>
                </div>

                <div className="w-full flex max-sm:flex-col max-sm:gap-16 justify-between px-60 max-sm:px-8">

                    <div className="max-w-[30rem] max-h-[34rem] box-border p-6 border border-black-100 bg-white shadow-xl rounded-2xl flex flex-col items-center gap-6">
                        <img src={ShopProducts} alt="Shop Products Picture" className="w-full h-[60%] object-cover" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-serif text-xl text-black capitalize">shop products</h3>
                            <p className="text-lg font-serif text-gray-500 capitalize text-center">visual time tables, song boards, and therapy-related tools</p>
                        </div>
                        <Link to="/products" style={{color:"unset"}}><RButton className="px-8 py-2">View Products</RButton></Link>
                    </div>

                    <div className="max-w-[30rem] max-h-[34rem] box-border p-6 border border-black-100 bg-white shadow-xl rounded-2xl flex flex-col items-center gap-6">
                        <img src={ShopVideos} alt="Shop Products Picture" className="w-full h-[60%] object-cover" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-serif text-xl text-black capitalize">Shop Course Videos</h3>
                            <p className="text-lg font-serif text-gray-500 capitalize text-center">Online Course Videos, Guided-therapy related videos</p>
                        </div>
                        <Link to="/videos" style={{color:"unset"}}><RButton className="px-8 py-2">View Courses</RButton></Link>
                    </div>

                </div>


                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Shop