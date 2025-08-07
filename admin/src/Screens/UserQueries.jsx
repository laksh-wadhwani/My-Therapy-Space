import React from "react";
import CustomTable from "../Components/CustomTable";

const UserQueries = ({isSidebarHovered}) => {

    const columns = [
        { key: "title", label: "Title" },
        { key: "email", label: "Email" },
        { key: "subject", label: "Subject" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" }
    ];

    const queriesStatusStyles = {
        Answered: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
    };

    const userQueries = [
        {title:"Sarah Johnson", email:"sarah.j@example.com", subject:"Speech Therapy Inquiry", date:"2025-05-05", status:"Pending"},
        {title:"Michael Lee", email:"m.lee@email.com", subject:"Workshop Registration", date:"2025-05-04", status:"Answered"},
        {title:"Emma Wilson", email:"ewilson@domain.com", subject:"Product Question", date:"2025-05-03", status:"Pending"},
        {title:"David Thompson", email:"david.t@outlook.com", subject:"Course Information", date:"2025-05-02", status:"Pending"},
        {title:"Rebecca Chen", email:"rebeccac@gmail.com", subject:"Booking Issue", date:"2025-05-01", status:"Answered"},
        {title:"Sarah Johnson", email:"sarah.j@example.com", subject:"Speech Therapy Inquiry", date:"2025-05-05", status:"Pending"},
        {title:"Michael Lee", email:"m.lee@email.com", subject:"Workshop Registration", date:"2025-05-04", status:"Answered"},
        {title:"Emma Wilson", email:"ewilson@domain.com", subject:"Product Question", date:"2025-05-03", status:"Pending"},
        {title:"David Thompson", email:"david.t@outlook.com", subject:"Course Information", date:"2025-05-02", status:"Pending"},
        {title:"Rebecca Chen", email:"rebeccac@gmail.com", subject:"Booking Issue", date:"2025-05-01", status:"Answered"}
    ];


    return(
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage user queries</h1>
                    <p className="font-serif text-gray-500 text-base italic">View, respond to and manage user queries from your website</p>
                </div>

                <CustomTable title="User Queries" columns={columns} data={userQueries} statusStyles={queriesStatusStyles} />

            </div>
            
        </React.Fragment>
    )
}

export default UserQueries