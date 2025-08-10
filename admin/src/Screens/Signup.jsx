import React, { useState } from "react";
import Navbar from "../Components/navbar";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import LoginBg from "../assets/loginbg.png";

const Signup = () => {

    const [otpToggle, setOtpToggle] = useState(false)

    return(
        <React.Fragment>
            <Navbar/>
            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:100%] absolute flex items-center px-50" style={{ backgroundImage: `url(${LoginBg})` }}>

                <div className="w-100 py-8 px-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-8 mt-16">
                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">{otpToggle? `Verification` : `admin signup`}</h2>

                    {otpToggle? 
                    <>
                    <div className="flex justify-between">
                        <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" />
                        <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" />
                        <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" />
                        <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" />
                    </div>
                    <CustomButton onClick={() => setOtpToggle(false)}>Verify</CustomButton>
                    </> 
                    : 
                    <>
                    <div className="w-full flex flex-col gap-3">
                        <CustomInput label="Name" type="text" placeholder="Name"/>
                        <CustomInput label="Email" type="email" placeholder="Email" />
                        <CustomInput label="Password" type="password" placeholder="Password"/>
                        <CustomInput label="Secret Key" type="password" placeholder="Secret Key"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <CustomButton onClick={() => setOtpToggle(true)}>Create Account</CustomButton>
                        <p className="font-serif text-base text-black self-center">Already have an account? <a href="/" className="text-[#00C7BE] font-bold">Login</a></p>
                    </div>
                    </>
                    }
                </div>

            </div>

        </React.Fragment>
    )
}

export default Signup