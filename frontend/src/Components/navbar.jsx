import React, { useRef, useState } from "react";
import RButton from "./Reusable_Button";
import { Link, useNavigate } from "react-router";
import { HashLink } from 'react-router-hash-link';
import Modal from "react-responsive-modal";
import CustomInput from "../Components/CustomInput.jsx"
import CustomButton from "../Components/CustomButton.jsx"
import axios from "axios";
import { BackendURL } from "../BackendContext.jsx";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { Menu, ShoppingCart } from 'lucide-react';

const Navbar = ({ user, setLoginUser }) => {

  const URL = BackendURL();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false)
  const [isForget, setIsForget] = useState(false)
  const [isVerify, setIsVerify] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [aboutUsToggle, setAboutUsToggle] = useState(false)
  const [workshopToggle, setWorkshopToggle] = useState(false)
  const [servicesToggle, setServicesToggle] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    c: "",
    o: "",
    d: "",
    e: ""
  })

  const { c, o, d, e, email } = userData
  const otp = c + o + d + e

  const cRef = useRef(null)
  const oRef = useRef(null)
  const dRef = useRef(null)
  const eRef = useRef(null)

  let nameInitials = null
  let firstName = null
  if (user) {
    const { fullname } = user
    nameInitials = fullname.split(" ").map(word => word[0].toUpperCase()).join("")
    firstName = fullname.split(" ")[0]
  }


  const handleChange = (name, value, nextRef) => {
    setUserData(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === "c" || name === "o" || name === "d" || name === "e") {
      if (value.length === 1 && nextRef?.current) {
        nextRef.current.focus();
      }
    }
  }

  const ToggleDropDowns = () => {
    setAboutUsToggle(false)
    setWorkshopToggle(false)
    setServicesToggle(false)
  }

  const ToggleSignUp = () => {
    setLoginOpen(false)
    setSignupOpen(true)
  }

  const ToggleLogin = () => {
    setSignupOpen(false)
    setLoginOpen(true)
  }

  const CreateAccount = () => {
    setLoading(true)
    axios.post(`${URL}/api/users/signup`, userData)
      .then(response => {
        setIsVerify(true)
        return toast.success(response.data.message)
      })
      .catch(error => {
        console.error("Getting Error in signing up: ", error)
        return toast.error(error.response?.data?.error)
      })
      .finally(() => setLoading(false))
  }

  const Verify = () => {
    axios.put(`${URL}/api/users/verify-otp/${email}`, { otp })
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in verifyung otp: ", error)
        return toast.error(error.response?.data?.error)
      })
  }

  const Login = () => {
    axios.post(`${URL}/api/users/login`, userData)
      .then(response => {
        toast.success(response.data.message)
        const token = response.data.token
        sessionStorage.setItem("token", token)
        const decoded = jwtDecode(token)
        setLoginUser(decoded)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in logging in: ", error)
        return toast.error(error.response?.data?.error)
      })
  }

  const ForgetPassword = () => {
    axios.put(`${URL}/api/users/forget-password`, { email })
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in forgetting password: ", error)
        return toast.error(error.response?.data?.error)
      })
  }

  return (
    <React.Fragment>

      <nav className="w-full flex flex-col items-center fixed top-4 z-50">

        <div className="w-[95%] flex items-center bg-white shadow-md justify-between rounded-full px-6 py-2">

          <Link to="/">
            <div className="flex items-center gap-2">
              <img
                src="../logo.svg"
                alt="Logo"
                className="size-14 max-sm:size-10"
              />
              <span className="text-2xl max-sm:text-lg font-serif capitalize text-[#0BAFA6]">
                My Therapy Space
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-6">
            <ul className="flex font-serif text-lg capitalize gap-4 cursor-pointer text-[#797979] max-sm:hidden">
              <Link to="/" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>Home</li></Link>

              <div className="flex items-center gap-2 relative">
                <Link to="/AboutUs" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]">About us</li></Link>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setAboutUsToggle(!aboutUsToggle)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {aboutUsToggle &&
                  <ul className="font-serif text-lg capitalize flex flex-col gap-2 cursor-pointer text-[#797979] absolute top-8 left-0  bg-white py-4 px-6 rounded-xl">
                    <Link to="/Team" style={{ color: "unset" }} onClick={() => setAboutUsToggle(!aboutUsToggle)}><li className="hover:text-[#0BAFA6]">team</li></Link>
                    <Link to="/Fees" style={{ color: "unset" }} onClick={() => setAboutUsToggle(!aboutUsToggle)}><li className="hover:text-[#0BAFA6]">fees</li></Link>
                  </ul>
                }
              </div>
              <div className="flex items-center gap-2 relative">
                <Link to="/services" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]">Services</li></Link>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setServicesToggle(!servicesToggle)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {servicesToggle &&
                  <ul className="font-serif text-lg capitalize flex flex-col gap-2 cursor-pointer text-[#797979] absolute top-8 left-0  bg-white py-4 px-6 rounded-xl min-w-[230px]">
                    <HashLink to="/services#speech-pathology" style={{ color: "unset" }} onClick={() => setServicesToggle(!servicesToggle)}><li className="hover:text-[#0BAFA6]">Speech Pathology</li></HashLink>
                    <HashLink to="/services#dietician" style={{ color: "unset" }} onClick={() => setServicesToggle(!servicesToggle)}><li className="hover:text-[#0BAFA6]">Dietician</li></HashLink>
                    <HashLink to="/services#occupational-therapy" style={{ color: "unset" }} onClick={() => setServicesToggle(!servicesToggle)}><li className="hover:text-[#0BAFA6]">Occupational Therapy</li></HashLink>
                    <HashLink to="/services#therapy-assistance" style={{ color: "unset" }} onClick={() => setServicesToggle(!servicesToggle)}><li className="hover:text-[#0BAFA6]">Therapy Assistance</li></HashLink>
                  </ul>
                }
              </div>
              <Link to="/blogs" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>blogs</li></Link>

              <div className="flex items-center gap-2">
                <Link to="/workshop" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>workshops</li></Link>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setWorkshopToggle(!workshopToggle)}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {workshopToggle &&
                  <ul className="font-serif text-lg capitalize flex flex-col gap-2 cursor-pointer text-[#797979] fixed top-16 right-[19rem] bg-white py-4 px-6 rounded-xl">
                    <Link to="/currentworkshops" style={{ color: "unset" }} onClick={() => setWorkshopToggle(!workshopToggle)}><li className="hover:text-[#0BAFA6]">Current Workshops</li></Link>
                    <Link to="/alsooffer" style={{ color: "unset" }} onClick={() => setWorkshopToggle(!workshopToggle)}><li className="hover:text-[#0BAFA6]">We Also Offer</li></Link>
                  </ul>
                }
              </div>

              <Link to="/booking" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>booking</li></Link>
              <Link to="/shop" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>shop</li></Link>
              <Link to="/contact" style={{ color: "unset" }}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>contact</li></Link>
            </ul>

            {user ?
              <div className="flex gap-6 items-center">
                <Link to={`/user-profile/${user.id}`}><div className="flex items-center gap-2 bg-[#0BAFA6] py-1 px-2 rounded-xl shadow-md cursor-pointer hover:scale-105 max-sm:hidden">
                  {user.profile ?
                    <img src={user.profile} alt="User Profile" className="size-10 rounded-full object-cover" />
                    :
                    <div className="size-10 bg-white p-3 rounded-full flex items-center justify-center border border-gray-200 shadow-md">
                      <span className="text-lg text-black font-bold uppercase">{nameInitials}</span>
                    </div>
                  }
                  <span className="font-serif text-lg text-white">Hello, {firstName}</span>
                </div></Link>
                <ShoppingCart size={32} className="stroke-[#0BAFA6] hover:scale-105 max-sm:size-6" onClick={() => navigate(`/cart/${user.id}`)} />
              </div>
              :
              <RButton
                className="px-8 py-2 max-sm:hidden"
                onClick={() => setLoginOpen(true)}
              >
                Login
              </RButton>}

            {/* Mobile Menu Icon */}
            <Menu
              size={32}
              className="hidden max-sm:block stroke-black hover:scale-105"
              onClick={() => setIsMobileOpen(true)}
            />
          </div>

        </div>

      </nav>

      {/* ----------- Mobile Drawer ----------- */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col p-6 gap-4 font-serif text-lg capitalize text-[#797979]">
          <button
            className="self-end text-2xl font-bold text-gray-600"
            onClick={() => setIsMobileOpen(false)}
          >
            ✕
          </button>

          <Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link>

          {/* About Us Dropdown */}
          <div>
            <p
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setAboutUsToggle(!aboutUsToggle)}
            >
              About Us
              <span>{aboutUsToggle ? "▲" : "▼"}</span>
            </p>
            {aboutUsToggle && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-base">
                <Link to="/Team" onClick={() => setIsMobileOpen(false)}>Team</Link>
                <Link to="/Fees" onClick={() => setIsMobileOpen(false)}>Fees</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div>
            <p
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setServicesToggle(!servicesToggle)}
            >
              Services
              <span>{servicesToggle ? "▲" : "▼"}</span>
            </p>
            {servicesToggle && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-base">
                <HashLink to="/services#speech-pathology" onClick={() => setIsMobileOpen(false)}>Speech Pathology</HashLink>
                <HashLink to="/services#dietician" onClick={() => setIsMobileOpen(false)}>Dietician</HashLink>
                <HashLink to="/services#occupational-therapy" onClick={() => setIsMobileOpen(false)}>Occupational Therapy</HashLink>
                <HashLink to="/services#therapy-assistance" onClick={() => setIsMobileOpen(false)}>Therapy Assistance</HashLink>
              </div>
            )}
          </div>

          {/* Workshop Dropdown */}
          <div>
            <p
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setWorkshopToggle(!workshopToggle)}
            >
              Workshops
              <span>{workshopToggle ? "▲" : "▼"}</span>
            </p>
            {workshopToggle && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-base">
                <Link to="/currentworkshops" onClick={() => setIsMobileOpen(false)}>Current Workshops</Link>
                <Link to="/alsooffer" onClick={() => setIsMobileOpen(false)}>We Also Offer</Link>
              </div>
            )}
          </div>

          <Link to="/blogs" onClick={() => setIsMobileOpen(false)}>Blogs</Link>
          <Link to="/booking" onClick={() => setIsMobileOpen(false)}>Booking</Link>
          <Link to="/shop" onClick={() => setIsMobileOpen(false)}>Shop</Link>
          <Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link>

          {user ?
            <Link to={`/user-profile/${user.id}`} onClick={() => setIsMobileOpen(false)}><div className="flex items-center gap-2 bg-[#0BAFA6] py-1 px-2 rounded-xl shadow-md cursor-pointer hover:scale-105">
              {user.profile ?
                <img src={user.profile} alt="User Profile" className="size-10 rounded-full object-cover" />
                :
                <div className="size-10 bg-white p-3 rounded-full flex items-center justify-center border border-gray-200 shadow-md">
                  <span className="text-lg text-black font-bold uppercase">{nameInitials}</span>
                </div>
              }
              <span className="font-serif text-lg text-white">Hello, {firstName}</span>
            </div></Link>
            :
            <RButton
              className="px-6 py-2 mt-6 self-start"
              onClick={() => {
                setLoginOpen(true);
                setIsMobileOpen(false);
              }}
            >
              Login
            </RButton>}
        </div>
      </div>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".7rem" } }}>

        <div className="flex flex-col gap-8 py-8 px-12">
          <h4 className="font-serif text-2xl text-black self-center">{isForget ? `Forget Password` : `Member Login`}</h4>

          {isForget ?
            (<>
              <CustomInput label="Email" placeholder="Registered Email" type="email" value={userData.email} onChange={e => handleChange("email", e.target.value)} />
              <CustomButton onClick={ForgetPassword}>Forget</CustomButton>
            </>) :
            (<>
              <div className="w-full flex flex-col gap-2">
                <CustomInput label="Email" placeholder="Email" type="email" value={userData.email} onChange={e => handleChange("email", e.target.value)} />
                <CustomInput label="Password" placeholder="Password" type="password" value={userData.password} onChange={e => handleChange("password", e.target.value)} />
                <p className="font-serif text-base underline self-end cursor-pointer" onClick={() => setIsForget(true)}>Forget Password?</p>
              </div>

              <div className="w-full flex flex-col gap-2">
                <CustomButton onClick={Login}>Login</CustomButton>
                <p className="font-serif self-center">Don't have an account? <strong className="text-[#00C7BE] cursor-pointer" onClick={ToggleSignUp}>Create</strong></p>
              </div>
            </>)
          }

        </div>

      </Modal>

      <Modal open={signupOpen} onClose={() => setSignupOpen(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".7rem" } }}>

        <div className="flex flex-col gap-8 py-8 px-12">
          <h4 className="font-serif text-3xl text-black self-center">{isVerify ? `Verification` : `Sign Up`}</h4>

          {isVerify ?
            (<>
              <div className="flex gap-4">
                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={userData.c} maxLength={1} ref={cRef} onChange={e => handleChange("c", e.target.value, oRef)} />
                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={userData.o} maxLength={1} ref={oRef} onChange={e => handleChange("o", e.target.value, dRef)} />
                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={userData.d} maxLength={1} ref={dRef} onChange={e => handleChange("d", e.target.value, eRef)} />
                <input type="text" className="p-2 border border-black rounded-xl size-14 text-center" value={userData.e} maxLength={1} ref={eRef} onChange={e => handleChange("e", e.target.value)} />
              </div>

              <CustomButton onClick={Verify}>Verify</CustomButton>

            </>)
            :
            (<>
              <div className="w-full flex flex-col gap-2">
                <CustomInput label="Full Name" placeholder="Full Name" type="text" value={userData.fullname} onChange={e => handleChange("fullname", e.target.value)} />
                <CustomInput label="Email" placeholder="Email" type="email" value={userData.email} onChange={e => handleChange("email", e.target.value)} />
                <CustomInput label="Password" placeholder="Password" type="password" showPasswordRules={true} value={userData.password} onChange={e => handleChange("password", e.target.value)} />
              </div>

              <div className="w-full flex flex-col gap-2">
                <CustomButton onClick={CreateAccount} disabled={loading}>
                  {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Create Account"}
                </CustomButton>
                <p className="font-serif self-center">Already Member? <strong className="text-[#00C7BE] cursor-pointer" onClick={ToggleLogin}>Login</strong></p>
              </div>
            </>)}
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default Navbar