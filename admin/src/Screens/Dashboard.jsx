import React from "react";
import CustomTable from "../Components/CustomTable";
import CustomButton from "../Components/CustomButton";

const Dashboard = ({ isSidebarHovered }) => {

    const columns = [
        { key: "type", label: "Type" },
        { key: "user", label: "User" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
    ];

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

                <h1 className="font-serf text-4xl font-bold text-black capitalize italic mt-12 border-b border-gray-200 p-4">Dashboard</h1>

                <div className="w-full flex flex-col px-4">
                    <h3 className="font-serif text-black text-xl">Welcome back, Sahil</h3>
                    <p className="font-serif text-gray-500 text-base">Here's what's happening with your site today.</p>
                </div>

                <CustomTable title="Recent Activity" columns={columns} data={dummyData} showActions={false} />

                <div className="w-full flex gap-8">
                    <CustomButton>add new blog</CustomButton>
                    <CustomButton>add workshop</CustomButton>
                    <CustomButton>add product</CustomButton>
                    <CustomButton>add cost</CustomButton>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Dashboard