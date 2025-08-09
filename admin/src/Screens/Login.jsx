import React, { useState } from "react";
import LoginBg from "../assets/loginbg.png";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import Navbar from "../Components/navbar";

const Login = () => {

    const [forgetPassToggle, setForgetPassToggle] = useState(false)

    return (
        <React.Fragment>

            <Navbar/>

            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:120%] absolute flex items-center px-52" style={{ backgroundImage: `url(${LoginBg})` }}>

                <div className="w-100 p-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-14 mt-16">

                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">{forgetPassToggle? `forget password` : `admin login`}</h2>

                    {forgetPassToggle? 
                    (
                    <>
                        <CustomInput label="Enter registered email" type="email" placeholder="Email"/>
                        <CustomButton>Forget Password</CustomButton>
                    </>
                    )
                    :
                    (
                        <>
                         <div className="w-full flex flex-col gap-4">
                            <CustomInput label="Email" type="email" placeholder="Email" />
                            <CustomInput label="Password" type="password" placeholder="Password"/>
                            <span className="font-serif text-base text-black capitalize underline cursor-pointer self-end" onClick={() => setForgetPassToggle(true)}>forget password?</span>
                        </div>   

                        <div className="flex flex-col gap-2">
                            <CustomButton>Login</CustomButton>
                            <p className="font-serif text-base text-black self-center">Don't have an account? <a href="/signup" className="text-[#00C7BE] font-bold">Create</a></p>
                        </div>
                        </>
                    )
                    }
                </div>

            </div>

        </React.Fragment>
    );
};

export default Login;
