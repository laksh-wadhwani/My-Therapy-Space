import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Logs, Store, FileUser, LogOut, MonitorStop, Box } from 'lucide-react';


const Sidebar = ({ onHoverChange }) => {
    return (
        <React.Fragment>
            <div className={`group fixed top-0 left-0 h-dvw bg-white shadow-md transition-all duration-300 ease-in-out w-[5%] hover:w-[17%] flex flex-col gap-10 box-border py-12 px-4 overflow-hidden`}
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}>

                <div className="flex items-center gap-2">
                    <img src="./logo.svg" alt="Company Logo" className="size-10 group-hover:size-14 transition-all duration-300" />
                    <span className="font-serif capitalize text-lg text-[#0BAFA6] italic whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">my therapy space</span>
                </div>

                <div className="w-full flex flex-col gap-6">
                    <Link to="/dashboard"><button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dashboad</span>
                    </button></Link>

                    <Link to="/manage-blogs"><button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <Logs className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Blogs</span>
                    </button></Link>

                    <Link to="/manage-workshops"><button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <Store className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Workshops</span>
                    </button></Link>

                    <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <Box className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Products</span>
                    </button>

                    <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <MonitorStop className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Courses</span>
                    </button>

                    <Link to="/manage-user-queries"><button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <FileUser className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage User Queries</span>
                    </button></Link>

                    <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-red-100 hover:scale-105 hover:text-red-500">
                        <LogOut className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Logout</span>
                    </button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sidebar