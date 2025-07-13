import React from "react";

const RButton = ({onClick, className = "", children}) => {
    return(
        <button
        onClick={onClick}
        className={`bg-[#0BAFA6] text-white font-serif text-base rounded-full transition-all duration-500 hover:bg-transparent hover:border-[#0a9993] hover:text-black hover:scale-105 focus:outline-none ${className}`}
        >
            {children}
        </button>
    )
}

export default RButton;