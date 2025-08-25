import React, { useState } from "react";
import LoginBg from "../assets/loginbg.png";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import Navbar from "../Components/navbar";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../global.styles.css"

const Login = ({setLoginUser}) => {
    
    const URL = BackendURL();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [forgetPassToggle, setForgetPassToggle] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = eventTriggered => {
        const {name, value} = eventTriggered.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = () => {
        setLoading(true)
        axios.post(`${URL}/api/admin/login`, user)
        .then(response => {
            toast.success(response.data.message)
            const token = response.data.token
            sessionStorage.setItem("token", token)
            const decoded = jwtDecode(token)
            setLoginUser(decoded)
            navigate("/dashboard")
        })
        .catch(error => {
            console.error(error)
            return toast.error(error.response?.data?.error)
        })
        .finally(() => {setLoading(false)})
    }

    const ForgetPassword = () => {
        const {email} = user
        axios.put(`${URL}/api/admin/forget-password`, {email})
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(0)},2500)
        })
        .catch(error => {
            console.error("Getting error in forgetting password")
            return toast.error(error?.response?.data?.error)
        })
    }

    return (
        <React.Fragment>

            <Navbar/>

            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:100%] absolute flex items-center px-52 login-bg max-sm:justify-center max-sm:items-center max-sm:mt-0 max-sm:p-0">

                <div className="w-100 p-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-14 mt-16 max-sm:mt-20">

                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">{forgetPassToggle? `forget password` : `admin login`}</h2>

                    {forgetPassToggle? 
                    (
                    <>
                        <CustomInput label="Enter registered email" type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
                        <CustomButton onClick={ForgetPassword}>Forget Password</CustomButton>
                    </>
                    )
                    :
                    
                        <>
                        <div className="w-full flex flex-col gap-4">
                            <CustomInput label="Email" type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
                            <CustomInput label="Password" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                            <span className="font-serif text-base text-black capitalize underline cursor-pointer self-end" onClick={() => setForgetPassToggle(true)}>forget password?</span>
                        </div>   

                        <div className="flex flex-col gap-2">
                            <CustomButton onClick={Login} disabled={loading}>
                                {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin"/> : "Login"}
                            </CustomButton>
                            <p className="font-serif text-base text-black self-center">Don't have an account? 
                                <Link to="/signup"><span className="text-[#00C7BE] font-bold">Create</span></Link>
                            </p>
                        </div>
                        </>
                    
                    }
                </div>

            </div>

        </React.Fragment>
    );
};

export default Login;
