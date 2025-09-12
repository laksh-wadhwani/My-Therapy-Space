import React from "react";

const Footer = () => {
    return(
        <React.Fragment>
            <div className="w-full bg-[#3A3A3A] border-box flex flex-col items-center gap-12 py-20">

                <p className="font-serif text-white text-lg md:text-2xl">Copyright &copy; 2025 My Therapy Space</p>

                <div className="flex flex-col items-center italic text-center font-serif text-white text-sm md:text-lg">
                    <span>reception@mytherapyspace.com.au</span>
                    <p>Suite 3AB/2 Classic Way, Bulreigh Waters, QLD <br/> 12 Halcyon Way Hope Island Qld 4212</p>
                    <span>+07 5559 9888</span>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Footer