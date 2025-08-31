import React from "react";

const RButton = ({onClick, className = "", children}) => {
    return(
        <button
        onClick={onClick}
        className={`bg-[#0BAFA6] text-white font-serif text-base rounded-full transition-all duration-500 hover:bg-transparent hover:border hover:border-[#0BAFA6] hover:text-black hover:scale-105 ${className}`}
        >
            {children}
        </button>
    )
}

export default RButton;