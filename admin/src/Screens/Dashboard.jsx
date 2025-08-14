import React from "react";
import CustomTable from "../Components/CustomTable";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";

const Dashboard = ({ isSidebarHovered, user }) => {

    const columns = [
        { key: "type", label: "Type" },
        { key: "user", label: "User" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
    ];

    const dashboardStatusStyles = {
        Confirmed: "bg-green-100 text-green-700",
        Paid: "bg-blue-100 text-blue-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Shipped: "bg-indigo-100 text-indigo-700",
        Rescheduled: "bg-red-100 text-red-700",
    };

    const dummyData = [
        { type: "Booking", user: "Mubeen Ahmed", date: "2025-04-30", status: "Confirmed" },
        { type: "Course", user: "Sahil Kumar", date: "2025-04-29", status: "Paid" },
        { type: "Query", user: "Zia-Ul-Haq", date: "2025-04-28", status: "Pending" },
        { type: "Product", user: "Suman", date: "2025-04-27", status: "Shipped" },
        { type: "Booking", user: "Angeli", date: "2025-04-26", status: "Rescheduled" },
        { type: "Booking", user: "Mubeen Ahmed", date: "2025-04-30", status: "Confirmed" },
        { type: "Course", user: "Sahil Kumar", date: "2025-04-29", status: "Paid" },
        { type: "Query", user: "Zia-Ul-Haq", date: "2025-04-28", status: "Pending" },
        { type: "Product", user: "Suman", date: "2025-04-27", status: "Shipped" },
        { type: "Booking", user: "Angeli", date: "2025-04-26", status: "Rescheduled" }
    ];

    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col gap-8 pb-12`}>

                <h1 className="font-serf text-4xl font-bold text-black capitalize italic mt-6 border-b border-gray-200 p-4">Dashboard</h1>

                <div className="w-full flex flex-col px-4">
                    <h3 className="font-serif text-black text-xl">Welcome back, {user.fullname}</h3>
                    <p className="font-serif text-gray-500 text-base">Here's what's happening with your site today.</p>
                </div>

                <div className="w-full flex flex-col px-4">
                    <h3 className="font-serif text-black text-xl font-semibold">Admin Approvals</h3>
                    <div className="w-full h-20 bg-white border border-gray-200 rounded-xl shadow-md flex items-center">

                        <div className="flex">
                            <CustomButton>Approve</CustomButton>
                            <CustomButton>Reject</CustomButton>
                        </div>
                    </div>
                </div>

                <CustomTable title="Recent Activity" columns={columns} data={dummyData} showActions={false} statusStyles={dashboardStatusStyles} />

                <div className="w-full flex gap-8">
                    <Link to="/manage-blogs"><CustomButton>add new blog</CustomButton></Link>
                    <Link to="/manage-workshops"><CustomButton>add workshop</CustomButton></Link>
                    <Link to="/manage-products"><CustomButton>add product</CustomButton></Link>
                    <Link to="/manage-courses"><CustomButton>add course</CustomButton></Link>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Dashboard