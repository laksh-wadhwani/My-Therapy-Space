import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Logs, Store, FileUser, LogOut, MonitorStop, Box } from 'lucide-react';


const Sidebar = ({ onHoverChange, user, setLoginUser }) => {

    const navigate = useNavigate(); 
    const {fullname} = user
    const nameInitials = fullname.split(" ").map(word => word[0].toUpperCase()).join("")
    

    const Logout = () => {
        setLoginUser(null)
        sessionStorage.removeItem("token")
        navigate("/")
    }

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
                    <Link to="/dashboard">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <LayoutDashboard className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dashboad</span>
                        </button>
                    </Link>

                    <Link to="/manage-blogs">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <Logs className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Blogs</span>
                        </button>
                    </Link>

                    <Link to="/manage-workshops">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <Store className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Workshops</span>
                        </button>
                    </Link>

                    <Link to="/manage-products">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <Box className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Products</span>
                        </button>
                    </Link>

                    <Link to="/manage-courses">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <MonitorStop className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Courses</span>
                        </button>
                    </Link>

                    <Link to="/manage-user-queries">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <FileUser className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage User Queries</span>
                        </button>
                    </Link>

                    <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-red-100 hover:scale-105 hover:text-red-500" onClick={Logout}>
                        <LogOut className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Logout</span>
                    </button>
                </div>

                <div className="group/menu flex items-center gap-2 bg-[#0BAFA6] p-2 box-border rounded-lg font-serif w-fit self-center group-hover:self-start">
                
                    <div className="size-10 bg-white p-3 rounded-full flex items-center justify-center border border-gray-200 shadow-md">
                        <span className="text-lg text-black font-bold uppercase">{nameInitials}</span>
                    </div>

                    <span className="text-lg text-white hidden transition-display duration-100 ease-in-out group-hover:contents">
                       {user.role}
                    </span>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sidebar