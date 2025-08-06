import React from "react";
import { LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
    return(
        <React.Fragment>
            <div className="w-[20%] h-dvw fixed top-0 bg-white shadow-md flex flex-col gap-10 box-border py-12 px-10">

                <div className="flex items-center gap-2">
                    <img src="./logo.svg" alt="Company Logo" className="size-14" />
                    <span className="font-serif capitalize text-lg text-[#0BAFA6] italic">my therapy space</span>
                </div>

                <div className="w-full flex flex-col gap-6">
                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Dashboard
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Manage Blogs
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Manage Workspace
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Manage Products
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Manage Courses
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Manage User Queries
                    </button>

                    <button className="flex items-center gap-2 font-serif text-lg py-2 px-4 size-fit rounded-md transition delay-150 duration-300 ease-in-out hover:bg-[#F0FDFA] hover:scale-105 hover:text-[#14B8A6]">
                        <LayoutDashboard className="size-6"/>
                        Logout
                    </button>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Sidebar