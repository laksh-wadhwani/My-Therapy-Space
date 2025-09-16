import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/navbar";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import LoginBg from "../assets/loginbg.png";
import { BackendURL } from "../BackendContext";
import axios from "axios"
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import CustomFileUpload from "../Components/CustomFileUpload";

const Signup = () => {

    const URL = BackendURL()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [otpToggle, setOtpToggle] = useState(false)
    const [otpExpiryTime, setOtpExpiryTime] = useState(null)
    const [remainingTime, setRemainingTime] = useState(0)
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        secretKey: "",
        c: "",
        o: "",
        d: "",
        e: ""
    })

    const { c, o, d, e, email } = user
    const otp = c + o + d + e

    const cRef = useRef(null)
    const oRef = useRef(null)
    const dRef = useRef(null)
    const eRef = useRef(null)

    useEffect(() => {
        if (otpExpiryTime && otpToggle) {
            const interval = setInterval(() => {
                const now = Date.now();
                const difference = otpExpiryTime - now
                setRemainingTime(Math.max(Math.floor(difference / 1000), 0))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [otpExpiryTime, otpToggle])

    const handleChange = (name, value, nextRef) => {
        setUser(prev => ({
            ...prev,
            [name]: value
        }))

        if (name === "c" || name === "o" || name === "d" || name === "e") {
            if (value.length === 1 && nextRef?.current) {
                nextRef.current.focus();
            }
        }
    }

    const CreateAccount = () => {
        const UserData = new FormData();
        Object.entries(user).forEach(([Key, value]) => {
            UserData.append(Key, value)
        })
        setLoading(true);
        axios.post(`${URL}/api/admin/signup`, UserData)
            .then(response => {
                toast.success(response.data.message)
                setOtpExpiryTime(new Date(response.data.otp_expiry).getTime());
                setTimeout(() => { setOtpToggle(true) }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => { setLoading(false) })
    }

    const VerifyOtp = () => {
        setLoading(true)
        axios.put(`${URL}/api/admin/verify-otp/${email}`, { otp })
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate("/") }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => setLoading(false))
    }

    const ResendOTP = () => {
        axios.put(`${URL}/api/admin/resend-otp/${email}`, {purpose: "signup"})
        .then(response => {
            toast.success(response.data.message)
            setOtpExpiryTime(new Date(response.data.otp_expiry).getTime());
        })
        .catch(error => console.error("Getting error in resending otp: ",error))
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:100%] absolute flex items-center px-50 login-bg max-sm:justify-center max-sm:items-center max-sm:mt-0 max-sm:p-0">
                <div className="w-100 py-7 px-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-6 mt-16">
                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">{otpToggle ? `Verification` : `admin signup`}</h2>

                    {otpToggle ?
                        <>
                            {remainingTime===0? 
                            <p className="font-serif text-base text-[#14B8A6] cursor-pointer hover:scale-105 text-center" onClick={ResendOTP}>Resend OTP</p>
                            :
                            <p className="text-red-500 text-sm text-center">
                                OTP expires in {remainingTime}s
                            </p>
                            }
                            <div className="flex justify-between">
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={user.c} maxLength={1} ref={cRef} onChange={e => handleChange("c", e.target.value, oRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={user.o} maxLength={1} ref={oRef} onChange={e => handleChange("o", e.target.value, dRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={user.d} maxLength={1} ref={dRef} onChange={e => handleChange("d", e.target.value, eRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={user.e} maxLength={1} ref={eRef} onChange={e => handleChange("e", e.target.value)} />
                            </div>
                            <CustomButton onClick={VerifyOtp} disabled={loading}>
                                {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Verify"}
                            </CustomButton>
                        </>
                        :
                        <>
                            <div className="w-full flex flex-col gap-3">
                                <CustomInput label="Name" type="text" placeholder="Name" value={user.fullname} onChange={e => handleChange("fullname", e.target.value)} />
                                <CustomInput label="Email" type="email" placeholder="Email" value={user.email} onChange={e => handleChange("email", e.target.value)} />
                                <CustomInput label="Password" type="password" placeholder="Password" value={user.password} onChange={e => handleChange("password", e.target.value)} showPasswordRules={true} />
                                <CustomInput label="Secret Key" type="password" placeholder="Secret Key" value={user.secretKey} onChange={e => handleChange("secretKey", e.target.value)} />
                            </div>

                            <div className="flex flex-col gap-2">
                                <CustomButton onClick={CreateAccount} disabled={loading}>
                                    {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Create Account"}
                                </CustomButton>
                                <p className="font-serif text-base text-black self-center">Already have an account?
                                    <Link to="/"><span className="text-[#00C7BE] font-bold">Login</span></Link>
                                </p>
                            </div>
                        </>
                    }
                </div>

            </div>

        </React.Fragment>
    )
}

export default Signup