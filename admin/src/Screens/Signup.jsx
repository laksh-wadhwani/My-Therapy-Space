import React, { useRef, useState } from "react";
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
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        secretKey: "",
        profile: null,
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


    const handleChange = (eventTriggered, nextRef) => {
        const { name, type, value, files } = eventTriggered.target;

        if (type === "file") {
            const file = files[0];
            if (file && !file.type.startsWith("image/")) {
                toast.error("Only image files are allowed!");
                return;
            }
            setUser({
                ...user,
                [name]: file
            });
        } else {
            setUser({
                ...user,
                [name]: value
            });
        }

        if (name === "c" || name === "o" || name === "d" || name === "e") {
            if (value.length === 1 && nextRef?.current) {
                nextRef.current.focus();
            }
        }
    };

    const CreateAccount = () => {
        const UserData = new FormData();
        Object.entries(user).forEach(([Key, value]) => {
            UserData.append(Key, value)
        })
        setLoading(true);
        axios.post(`${URL}/api/admin/signup`, UserData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { setOtpToggle(true) }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => { setLoading(false) })
    }

    const VerifyOtp = () => {
        axios.put(`${URL}/api/admin/verify-otp/${email}`, { otp })
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate("/") }, 2500)
            })
            .catch(error => {
                console.error(error)
                return toast.error(error.response?.data?.error)
            })
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:100%] absolute flex items-center px-50 login-bg max-sm:justify-center max-sm:items-center max-sm:mt-0 max-sm:p-0">

                <div className="w-100 py-7 px-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-6 mt-16">
                    <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">{otpToggle ? `Verification` : `admin signup`}</h2>

                    {otpToggle ?
                        <>
                            <div className="flex justify-between">
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" name="c" value={user.c} maxLength={1} ref={cRef} onChange={e => handleChange(e, oRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" name="o" value={user.o} maxLength={1} ref={oRef} onChange={e => handleChange(e, dRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" name="d" value={user.d} maxLength={1} ref={dRef} onChange={e => handleChange(e, eRef)} />
                                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" name="e" value={user.e} maxLength={1} ref={eRef} onChange={handleChange} />
                            </div>
                            <CustomButton onClick={VerifyOtp}>Verify</CustomButton>
                        </>
                        :
                        <>
                            <div className="w-full flex flex-col gap-3">
                                <CustomInput label="Name" type="text" placeholder="Name" name="fullname" value={user.fullname} onChange={handleChange} />
                                <CustomInput label="Email" type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange}  />
                                <CustomInput label="Password" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} showPasswordRules={true} />
                                <CustomInput label="Secret Key" type="password" placeholder="Secret Key" name="secretKey" value={user.secretKey} onChange={handleChange} />
                                <CustomFileUpload label="Profile Picture" value={user.profile} onChange={handleChange} />
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