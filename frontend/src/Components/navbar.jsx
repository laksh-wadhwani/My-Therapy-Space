import React from "react";
import RButton from "./Reusable_Button";

const Navbar = () => {
  return(
    <React.Fragment>
      <nav className="w-screen flex justify-center fixed top-0 mt-4 z-50">

        <div className="flex items-center w-[95%] bg-white shadow-md justify-between rounded-full px-6 py-2">

          <div className="flex items-center gap-2">
            <img src="./logo.svg" alt="Logo" className="size-14"/>
            <span className="text-2xl font-serif capitalize text-[#0BAFA6]">My Therapy Space</span>
          </div>

          <div className="flex items-center gap-8">
            <ul className="flex font-serif text-lg capitalize gap-4 cursor-pointer text-[#797979]">
              <li className="hover:text-[#0BAFA6]">Home</li>
              <li className="hover:text-[#0BAFA6]">About us</li>
              <li className="hover:text-[#0BAFA6]">blogs</li>
              <li className="hover:text-[#0BAFA6]">workshops</li>
              <li className="hover:text-[#0BAFA6]">booking</li>
              <li className="hover:text-[#0BAFA6]">shop</li>
              <li className="hover:text-[#0BAFA6]">contact</li>
            </ul>
            <RButton className="px-6 py-2">Login</RButton>
          </div>

        </div>

      </nav>
    </React.Fragment>
  )
}

export default Navbar