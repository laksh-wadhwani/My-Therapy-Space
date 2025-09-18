import React, { useEffect, useRef, useState } from "react";
import LoginBg from "../assets/loginbg.png";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import Navbar from "../Components/navbar";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "../global.styles.css";

const Login = ({ setLoginUser }) => {
    const URL = BackendURL();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [forgetPassToggle, setForgetPassToggle] = useState(false);
    const [isForgetting, setIsForgetting] = useState(false);
    const [verifyToggle, setVerifyToggle] = useState(false);

    // new states for reset password step
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");

    const [otpExpiryTime, setOtpExpiryTime] = useState(null);
    const [remainingTime, setRemainingTime] = useState(0);

    const [user, setUser] = useState({
        email: "",
        password: "",
        c: "",
        o: "",
        d: "",
        e: "",
    });

    const { c, o, d, e, email } = user;
    const otp = c + o + d + e;

    const cRef = useRef(null);
    const oRef = useRef(null);
    const dRef = useRef(null);
    const eRef = useRef(null);

    useEffect(() => {
        if ((otpExpiryTime && verifyToggle) || (otpExpiryTime && isForgetting)) {
            const interval = setInterval(() => {
                const now = Date.now();
                const difference = otpExpiryTime - now;
                setRemainingTime(Math.max(Math.floor(difference / 1000), 0));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [otpExpiryTime, verifyToggle, isForgetting]);

    const handleChange = (name, value, nextRef) => {
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "c" || name === "o" || name === "d" || name === "e") {
            if (value.length === 1 && nextRef?.current) {
                nextRef.current.focus();
            }
        }
    };

    const LoginUser = () => {
        setLoading(true);
        axios
            .post(`${URL}/api/admin/login`, user)
            .then((response) => {
                toast.success(response.data.message);
                const token = response.data.token;
                sessionStorage.setItem("token", token);
                const decoded = jwtDecode(token);
                setLoginUser(decoded);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error(error);
                return toast.error(error.response?.data?.error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const VerifyOTPStatus = () => {
        if (!(email && user.password) && !forgetPassToggle)
            return toast.error("Please enter email and password");

        axios
            .put(`${URL}/api/admin/resend-otp/${email}`, { purpose: "signup" })
            .then((response) => {
                if (response.data.message === "You are already verified. Please Login") {
                    toast.success(response.data.message);
                    setTimeout(() => {
                        navigate(0);
                    }, 2500);
                    return;
                }
                toast.success(response.data.message);
                setOtpExpiryTime(new Date(response.data.otp_expiry).getTime());
                setVerifyToggle(true);
            })
            .catch((error) => {
                console.error("Getting error in verifying user: ", error);
                toast.error(error.response?.data?.error);
                setTimeout(() => {
                    navigate("/signup");
                }, 2500);
            });
    };

    const ForgotOTP = () => {
        setLoading(true);
        axios
            .put(`${URL}/api/admin/resend-otp/${email}`, { purpose: "forgot" })
            .then((response) => {
                toast.success(response.data.message);
                setOtpExpiryTime(new Date(response.data.otp_expiry).getTime());
                setIsForgetting(true);
            })
            .catch((error) => {
                console.error("Getting error in sending otp while forgetting: ", error);
                toast.error(error.response?.data?.error);
            })
            .finally(() => setLoading(false));
    };

    const VerifyOtp = () => {
        setLoading(true);
        axios
            .put(`${URL}/api/admin/verify-otp/${email}`, { otp })
            .then((response) => {
                toast.success(response.data.message);
                // show reset password field now
                setShowResetPassword(true);
            })
            .catch((error) => {
                console.error(error);
                return toast.error(error.response?.data?.error);
            })
            .finally(() => setLoading(false));
    };

    const handleResetPassword = () => {
        setLoading(true);
        axios
            .put(`${URL}/api/admin/reset-password/${email}`, { password: newPassword })
            .then((response) => {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate(0);
                }, 2500);
            })
            .catch((error) => toast.error(error.response?.data?.error))
            .finally(() => setLoading(false));
    };

    return (
        <React.Fragment>
            <Navbar />
            <div className="w-full h-dvh bg-left bg-no-repeat [background-size:100%] absolute flex items-center px-52 login-bg max-sm:justify-center max-sm:items-center max-sm:mt-0 max-sm:p-0">
                <div className="w-100 p-12 bg-white border border-gray-200 shadow-md rounded-xl flex flex-col gap-14 mt-16 max-sm:mt-20">
                    {verifyToggle ? (
                        // signup verification
                        <>
                            <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">
                                Verification
                            </h2>
                            {remainingTime === 0 ? (
                                <p
                                    className="font-serif text-base text-[#14B8A6] cursor-pointer hover:scale-105 text-center"
                                    onClick={VerifyOTPStatus}
                                >
                                    Resend OTP
                                </p>
                            ) : (
                                <p className="text-red-500 text-sm text-center">
                                    OTP expires in {remainingTime}s
                                </p>
                            )}
                            <div className="flex justify-between">
                                <input
                                    type="text"
                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                    value={user.c}
                                    maxLength={1}
                                    ref={cRef}
                                    onChange={(e) =>
                                        handleChange("c", e.target.value, oRef)
                                    }
                                />
                                <input
                                    type="text"
                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                    value={user.o}
                                    maxLength={1}
                                    ref={oRef}
                                    onChange={(e) =>
                                        handleChange("o", e.target.value, dRef)
                                    }
                                />
                                <input
                                    type="text"
                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                    value={user.d}
                                    maxLength={1}
                                    ref={dRef}
                                    onChange={(e) =>
                                        handleChange("d", e.target.value, eRef)
                                    }
                                />
                                <input
                                    type="text"
                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                    value={user.e}
                                    maxLength={1}
                                    ref={eRef}
                                    onChange={(e) => handleChange("e", e.target.value)}
                                />
                            </div>
                            <CustomButton disabled={loading} onClick={VerifyOtp}>
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                                ) : (
                                    "Verify"
                                )}
                            </CustomButton>
                        </>
                    ) : (
                        <>
                            <h2 className="font-serif capitalize text-2xl text-black font-semibold self-center">
                                {forgetPassToggle ? `forget password` : `admin login`}
                            </h2>

                            {forgetPassToggle ? (
                                <>
                                    {/* step 1: enter email */}
                                    {!isForgetting && !showResetPassword && (
                                        <>
                                            <CustomInput
                                                label="Enter registered email"
                                                type="email"
                                                placeholder="Email"
                                                value={user.email}
                                                onChange={(e) =>
                                                    handleChange("email", e.target.value)
                                                }
                                            />
                                            <CustomButton onClick={ForgotOTP} disabled={loading}>
                                                {loading ? (
                                                    <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                                                ) : (
                                                    "Send OTP"
                                                )}
                                            </CustomButton>
                                        </>
                                    )}

                                    {/* step 2: enter OTP */}
                                    {isForgetting && !showResetPassword && (
                                        <>
                                            {remainingTime === 0 ? (
                                                <p
                                                    className="font-serif text-base text-[#14B8A6] cursor-pointer hover:scale-105 text-center"
                                                    onClick={ForgotOTP}
                                                >
                                                    Resend OTP
                                                </p>
                                            ) : (
                                                <p className="text-red-500 text-sm text-center">
                                                    OTP expires in {remainingTime}s
                                                </p>
                                            )}
                                            <div className="flex justify-between">
                                                <input
                                                    type="text"
                                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                                    value={user.c}
                                                    maxLength={1}
                                                    ref={cRef}
                                                    onChange={(e) =>
                                                        handleChange("c", e.target.value, oRef)
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                                    value={user.o}
                                                    maxLength={1}
                                                    ref={oRef}
                                                    onChange={(e) =>
                                                        handleChange("o", e.target.value, dRef)
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                                    value={user.d}
                                                    maxLength={1}
                                                    ref={dRef}
                                                    onChange={(e) =>
                                                        handleChange("d", e.target.value, eRef)
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    className="p-2 border border-black rounded-xl size-14 text-center"
                                                    value={user.e}
                                                    maxLength={1}
                                                    ref={eRef}
                                                    onChange={(e) => handleChange("e", e.target.value)}
                                                />
                                            </div>
                                            <CustomButton disabled={loading} onClick={VerifyOtp}>
                                                {loading ? (
                                                    <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                                                ) : (
                                                    "Verify OTP"
                                                )}
                                            </CustomButton>
                                        </>
                                    )}

                                    {/* step 3: new password */}
                                    {showResetPassword && (
                                        <>
                                            <CustomInput
                                                label="New Password"
                                                type="password"
                                                placeholder="Enter new password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            <CustomButton
                                                onClick={handleResetPassword}
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                                                ) : (
                                                    "Reset Password"
                                                )}
                                            </CustomButton>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="w-full flex flex-col gap-4">
                                        <CustomInput
                                            label="Email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            value={user.email}
                                            onChange={(e) =>
                                                handleChange("email", e.target.value)
                                            }
                                        />
                                        <CustomInput
                                            label="Password"
                                            type="password"
                                            placeholder="Password"
                                            value={user.password}
                                            onChange={(e) =>
                                                handleChange("password", e.target.value)
                                            }
                                        />
                                        <div className="w-full flex justify-between">
                                            <span
                                                className="font-serif text-base text-[#14B8A6] capitalize hover:scale-105 underline cursor-pointer"
                                                onClick={VerifyOTPStatus}
                                            >
                                                Verify
                                            </span>
                                            <span
                                                className="font-serif text-base text-black capitalize underline cursor-pointer"
                                                onClick={() => setForgetPassToggle(true)}
                                            >
                                                forget password?
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <CustomButton onClick={LoginUser} disabled={loading}>
                                            {loading ? (
                                                <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" />
                                            ) : (
                                                "Login"
                                            )}
                                        </CustomButton>
                                        <p className="font-serif text-base text-black self-center">
                                            Don't have an account?
                                            <Link to="/signup">
                                                <span className="text-[#00C7BE] font-bold">
                                                    Create
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
