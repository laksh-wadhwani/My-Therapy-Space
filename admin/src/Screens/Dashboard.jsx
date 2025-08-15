import React from "react";
import CustomTable from "../Components/CustomTable";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
import { BackendURL } from "../BackendContext";
import { useState } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ isSidebarHovered, user }) => {

    const URL = BackendURL()
    const [loading, setLoading] = useState(false)
    const [admins, setAdmins] = useState([])

    useEffect(() => {
        axios.get(`${URL}/api/admin/get-admins`)
        .then(response => setAdmins(response.data))
    },[admins])

    const ApproveAdmin = adminId => {
        setLoading(true)
        axios.put(`${URL}/api/admin/approve-admin/${adminId}`)
        .then(response => toast.success(response.data.message))
        .catch(error => {
            console.error(error)
            return toast.error(error.response?.data?.error)
        })
        .finally(() => { setLoading(false) })
    }

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

                {(user.role === "super admin")?  (
                    <div className="w-full flex flex-col gap-4 px-4">
                        <h3 className="font-serif text-black text-xl font-semibold capitalize">{admins.length===0? `no admin approvals`:`admin approvals`}</h3>
                        {admins.map(data => (
                        <div className="w-full h-20 bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-between px-12 py-2 box-border">
                            <div className="flex gap-2 items-center">
                                {data.profile && <img src={data.profile} alt="User Profile Picture" className="size-16 object-cover rounded-full" />}
                                <span className="font-serif text-xl text-black font-semibold">{data.fullname}</span>
                            </div>
                            <div className="flex gap-4">
                                <CustomButton onClick={() => ApproveAdmin(data._id)}>
                                    {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Approve"}
                                </CustomButton>
                                <CustomButton>Reject</CustomButton>
                            </div>
                        </div>
                        ))}
                    </div>
                ):null}

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