import React, { useState } from "react";
import RButton from "./Reusable_Button";
import { Link } from "react-router";

const Navbar = () => {

  const [aboutUsToggle, setAboutUsToggle] = useState(false)
  const [workshopToggle, setWorkshopToggle] = useState(false)

  const ToggleDropDowns = () => {
    setAboutUsToggle(false)
    setWorkshopToggle(false)
  }

  return(
    <React.Fragment>
      <nav className="w-screen flex justify-center fixed top-0 mt-4 z-50">

        <div className="flex items-center w-[95%] bg-white shadow-md justify-between rounded-full px-6 py-2">

          <Link to="/"><div className="flex items-center gap-2">
            <img src="./logo.svg" alt="Logo" className="size-14"/>
            <span className="text-2xl font-serif capitalize text-[#0BAFA6]">My Therapy Space</span>
          </div></Link>

          <div className="flex items-center gap-8">

            <ul className="flex font-serif text-lg capitalize gap-4 cursor-pointer text-[#797979]">
              <Link to="/" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>Home</li></Link>

              <div className="flex items-center gap-2">
                <Link to="/AboutUs" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]">About us</li></Link>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setAboutUsToggle(!aboutUsToggle)}>
                   <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
                {aboutUsToggle && 
                <ul className="font-serif text-lg capitalize flex flex-col gap-2 cursor-pointer text-[#797979] fixed top-16 right-[35.75rem] bg-white py-4 px-6 rounded-xl">
                  <Link to="/Team" style={{color:"unset"}} onClick={() => setAboutUsToggle(!aboutUsToggle)}><li className="hover:text-[#0BAFA6]">team</li></Link>
                  <Link to="/Services" style={{color:"unset"}} onClick={() => setAboutUsToggle(!aboutUsToggle)}><li className="hover:text-[#0BAFA6]">services</li></Link>
                  <Link to="/Fees" style={{color:"unset"}} onClick={() => setAboutUsToggle(!aboutUsToggle)}><li className="hover:text-[#0BAFA6]">fees</li></Link>
                </ul>
                }
              </div>

              <Link to="/blogs" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>blogs</li></Link>

              <div className="flex items-center gap-2">
                <Link to="/workshop" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>workshops</li></Link>
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => setWorkshopToggle(!workshopToggle)}>
                   <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
                {workshopToggle && 
                <ul className="font-serif text-lg capitalize flex flex-col gap-2 cursor-pointer text-[#797979] fixed top-16 right-[19rem] bg-white py-4 px-6 rounded-xl">
                  <Link to="/currentworkshops" style={{color:"unset"}} onClick={() => setWorkshopToggle(!workshopToggle)}><li className="hover:text-[#0BAFA6]">Current Workshops</li></Link>
                  <Link to="/alsooffer" style={{color:"unset"}} onClick={() => setWorkshopToggle(!workshopToggle)}><li className="hover:text-[#0BAFA6]">We Also Offer</li></Link>
                </ul>
                }
              </div>

              <li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>booking</li>
              <Link to="/shop" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>shop</li></Link>
              <Link to="/contact" style={{color:"unset"}}><li className="hover:text-[#0BAFA6]" onClick={ToggleDropDowns}>contact</li></Link>
            </ul>

            <RButton className="px-6 py-2">Login</RButton>
          </div>

        </div>

      </nav>
    </React.Fragment>
  )
}

export default Navbar