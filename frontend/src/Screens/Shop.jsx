import React from "react";
import Footer from "../Components/footer";
import ShopProducts from "../assets/shop products.png"
import ShopVideos from "../assets/shop videos.png"
import RButton from "../Components/Reusable_Button";

const Shop = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full px-16 mt-32">
                    <h2 className="font-serif text-4xl text-[#0BAFA6] capitalize">Shopping</h2>
                    <p className="font-serif text-black text-xl capitalize">Welcome to My Therapy Space Shopping Area Please Select one of the below categories</p>
                </div>

                <div className="w-full flex justify-between px-60">

                    <div className="max-w-[30rem] max-h-[34rem] box-border p-6 border border-black-100 bg-white shadow-xl rounded-t-[3rem] flex flex-col items-center gap-6">
                        <img src={ShopProducts} alt="Shop Products Picture" className="w-full h-[60%] object-cover" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-serif text-xl text-black capitalize">shop products</h3>
                            <p className="text-lg font-serif text-gray-500 capitalize text-center">visual time tables, song boards, and therapy-related tools</p>
                        </div>
                        <RButton className="px-8 py-2">View Products</RButton>
                    </div>

                    <div className="max-w-[30rem] max-h-[34rem] box-border p-6 border border-black-100 bg-white shadow-xl rounded-t-[3rem] flex flex-col items-center gap-6">
                        <img src={ShopVideos} alt="Shop Products Picture" className="w-full h-[60%] object-cover" />
                        <div className="flex flex-col items-center">
                            <h3 className="font-serif text-xl text-black capitalize">Shop Course Videos</h3>
                            <p className="text-lg font-serif text-gray-500 capitalize text-center">Online Course Videos, Guided-therapy related videos</p>
                        </div>
                        <RButton className="px-8 py-2">View Courses</RButton>
                    </div>

                </div>


                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Shop