import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Logs, Store, FileUser, LogOut, MonitorStop, Box, PhoneCall, Menu } from 'lucide-react';


const Sidebar = ({ onHoverChange, user, setLoginUser }) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const { fullname } = user
    const nameInitials = fullname.split(" ").map(word => word[0].toUpperCase()).join("")


    const Logout = () => {
        setLoginUser(null)
        sessionStorage.removeItem("token")
        navigate("/")
    }

    return (
        <React.Fragment>
            <div className={`group fixed top-0 left-0 h-dvw bg-white shadow-md transition-all duration-300 ease-in-out w-[5%] hover:w-[17%] flex flex-col gap-10 box-border py-12 px-4 overflow-hidden max-sm:hidden`}
                onMouseEnter={() => onHoverChange(true)}
                onMouseLeave={() => onHoverChange(false)}>

                <div className="flex items-center gap-2">
                    <img src="../logo.svg" alt="Company Logo" className="size-10 group-hover:size-14 transition-all duration-300" />
                    <span className="font-serif capitalize text-lg text-[#0BAFA6] italic whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">my therapy space</span>
                </div>

                <div className="w-full flex flex-col gap-4">
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

                    <Link to="/manage-bookings">
                        <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                            <PhoneCall className="size-6" />
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Manage Bookings</span>
                        </button>
                    </Link>

                    <button className="group/menu flex items-center gap-2 font-serif text-base py-2 px-2 size-fit rounded-md transition duration-300 ease-in-out hover:bg-red-100 hover:scale-105 hover:text-red-500" onClick={Logout}>
                        <LogOut className="size-6" />
                        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Logout</span>
                    </button>
                </div>

                <Link to={`/profile`}><div className="group/menu flex items-center gap-2 bg-[#0BAFA6] p-2 box-border rounded-lg font-serif w-fit self-center group-hover:self-start">

                    {user.profile ?
                        (<img src={user.profile} alt="User Profile" className="w-10 h-10 object-cover rounded-full flex-shrink-0" />) :
                        (<div className="size-10 bg-white p-3 rounded-full flex items-center justify-center border border-gray-200 shadow-md">
                            <span className="text-lg text-black font-bold uppercase">{nameInitials}</span>
                        </div>)
                    }

                    <span className="text-lg text-white hidden transition-display duration-100 ease-in-out group-hover:contents">
                        {user.role.toUpperCase()}
                    </span>
                </div></Link>
            </div>

            <div className={`hidden w-full max-sm:flex flex-col fixed top-2 ${isOpen? `z-50`:`z-0`}`}>
                <div className="w-full bg-white border-b border-gray-100 shadow-md px-4 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="../logo.svg" alt="Company Logo" className="size-12" />
                        <span className="font-serif capitalize text-xl font-semibold text-[#0BAFA6] italic">My Therapy Space</span>
                    </div>
                    <Menu size={32} onClick={() => setIsOpen(!isOpen)} />
                </div>

                {isOpen && (
                    <div className="size-full h-dvh bg-white flex flex-col items-center gap-6 py-8">
                        <Link to="/dashboard"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <LayoutDashboard size={32} />
                            dashboard
                        </button></Link>

                        <Link to="/manage-blogs"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <Logs size={32} />
                            Manage Blogs
                        </button></Link>

                        <Link to="/manage-workshops"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <Store size={32} />
                            Manage Workshops
                        </button></Link>

                        <Link to="/manage-products"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <Box size={32} />
                            Manage Products
                        </button></Link>

                        <Link to="/manage-courses"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <MonitorStop size={32} />
                            Manage Courses
                        </button></Link>

                        <Link to="/manage-user-queries"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <FileUser size={32} />
                            Manage Queries
                        </button></Link>

                        <Link to="/manage-bookings"><button className="flex items-center gap-2 capitalize font-serif text-lg text-white rounded-md bg-[#0BAFA6] p-2 px-4" onClick={() => setIsOpen(false)}>
                            <PhoneCall size={32} />
                            Manage Bookings
                        </button></Link>

                        <Link to={`/profile`}>
                            <div className="w-fit flex items-center gap-2 bg-[#0BAFA6] p-2 box-border rounded-lg font-serif" onClick={() => setIsOpen(false)}>
                                {user.profile ? (
                                    <img
                                        src={user.profile}
                                        alt="User Profile"
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                ) : (
                                    <div className="size-10 bg-white p-3 rounded-full flex items-center justify-center border border-gray-200 shadow-md">
                                        <span className="text-lg text-black font-bold uppercase">
                                            {nameInitials}
                                        </span>
                                    </div>
                                )}
                                <span className="text-lg text-white">
                                    {user.role.toUpperCase()}
                                </span>
                            </div>
                        </Link>

                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Sidebar