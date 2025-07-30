import React from "react";
import blog_picture from "../assets/blog.png"
import SampleBlog from "../assets/sample blog.png"
import LinkedIn from "../assets/linkedin.svg"
import Twitter from "../assets/twitter.svg"
import Mail from "../assets/mail.svg"
import Pintrest from "../assets/pintrest.svg"
import Facebook from "../assets/facebook.svg"
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";

const SpecificBlog = () => {
    return(
        <React.Fragment>
            <div className="main-box bg-white items-center gap-10">

                <div className="w-full flex flex-col items-center mt-32 px-32 gap-12">
                    <h2 className="font-serif text-4xl capitalize text-[#0BAFA6]">What Is Neurodiversity Affirming Practice?</h2>
                    <p className="font-serif text-center text-black text-xl">Since 2022, our team at My Therapy Space has been shifting the way we work to better support neurodivergent children and families.Being neurodiversity affirming simply means we recognize and value all types of brains — and we’re committed to providing therapy that celebrates differences and builds on each child’s strengths.</p>
                    <img src={blog_picture} alt="Blog Picture" className="rounded-xl" />
                </div>

                <img src={SampleBlog} alt="Sample Blog" />

                <div className="w-[80%] box-border px-10 py-4 bg-white border border-black-100 shadow-md rounded-xl flex justify-between items-center">
                    <span className="font-serif text-2xl text-black uppercase">share this post</span>
                    <div className="w-fit flex gap-6">
                        <img src={LinkedIn} alt="LinkedIn Icon" className="object-contain cursor-pointer" />
                        <img src={Twitter} alt="Twitter Icon" className="object-contain cursor-pointer" />
                        <img src={Mail} alt="Mail Icon" className="object-contain cursor-pointer" />
                        <img src={Pintrest} alt="Pintrest Icon" className="object-contain cursor-pointer" />
                        <img src={Facebook} alt="Facebook Icon" className="object-contain cursor-pointer" />
                    </div>
                </div>

                <div className="w-[80%] flex flex-col gap-2">
                    <label className="font-serif capitalize text-lg text-black">leave a comment</label>
                    <textarea className="w-full h-80 border border-gray-200 shadow-md rounded-xl box-border px-8 py-4 font-serif text-lg" placeholder="Any Suggestions"/>
                </div>

                <div className="w-[80%] flex justify-between items-center">
                    <input placeholder="Name" className="w-[30%] border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base" />
                    <input placeholder="Email" className="w-[30%] border border-gray-200 shadow-md rounded-xl p-4 font-serif text-base" />
                    <RButton className="px-24 py-4">Submit</RButton>
                </div>

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default SpecificBlog