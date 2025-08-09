import React from "react";

const Navbar = () => {

  return(
    <React.Fragment>
      <nav className="w-screen flex justify-center fixed top-0 mt-4 z-50">

        <div className="flex items-center w-[95%] bg-white shadow-md justify-between rounded-full px-6 py-2">

          <div className="flex items-center gap-2">
            <img src="./logo.svg" alt="Logo" className="size-14"/>
            <span className="text-2xl font-serif capitalize text-[#0BAFA6]">My Therapy Space</span>
          </div>

        </div>

      </nav>
    </React.Fragment>
  )
}

export default Navbar