import React from "react";
import Navbar from "../Components/navbar";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import LoginBg from "../assets/loginbg.png";

const Signup = () => {
    return(
        <React.Fragment>
            <Navbar/>
            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:120%] absolute flex items-center px-52" style={{ backgroundImage: `url(${LoginBg})` }}>

                <div className="w-100 py-8 px-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-8 mt-16">
                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">admin signup</h2>
                    
                    <div className="w-full flex flex-col gap-3">
                        <CustomInput label="Name" type="text" placeholder="Name"/>
                        <CustomInput label="Email" type="email" placeholder="Email" />
                        <CustomInput label="Password" type="password" placeholder="Password"/>
                        <CustomInput label="Secret Key" type="password" placeholder="Secret Key"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <CustomButton>Create Account</CustomButton>
                        <p className="font-serif text-base text-black self-center">Already have an account? <a href="/" className="text-[#00C7BE] font-bold">Login</a></p>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Signup