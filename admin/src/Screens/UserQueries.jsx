import React from "react";
import CustomTable from "../Components/CustomTable";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Modal from "react-responsive-modal";
import CustomTextArea from "../Components/CustomTextArea";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-toastify";

const UserQueries = ({ isSidebarHovered }) => {

    const URL = BackendURL();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [queries, setQueries] = useState([]);
    const [queryData, setQueryData] = useState({})
    const [queryReply, setQueryReply] = useState("")

    useEffect(() => {
        axios.get(`${URL}/api/queries/get-queries`)
            .then(response => setQueries(response.data))
            .catch(error => console.error("Getting error in fetching user queries: ", error))
    })

    const columns = [
        { key: "guardianName", label: "Guardian Name" },
        { key: "childName", label: "Child Name" },
        { key: "email", label: "Email" },
        { key: "subject", label: "Subject" },
        { key: "createdAt", label: "Date" },
        { key: "status", label: "Status" }
    ];

    const queriesStatusStyles = {
        Answered: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
    };

    const SeeQuery = queriesData => {
        setOpen(true)
        setQueryData(queriesData)
    }

    const ReplyQuery = queryId => {
        setLoading(true)
        axios.put(`${URL}/api/queries/reply-query/${queryId}`, {queryReply} )
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(0)}, 2500)
        })
        .catch(error => {
            console.error("Getting error in replying to the query: ",error)
            return toast.error(error.response?.data?.error)
        })
        .finally(() => setLoading(false))
    }

    const DeleteQuery = queriesData => {
        axios.delete(`${URL}/api/queries/delete-query/${queriesData._id}`)
        .then(response => toast.success(response.data.message))
        .catch(error => {
            console.error("Getting error in deleting user query: ",error)
            return toast.error(error.response?.data?.error)
        })
    }

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border overflow-auto`}>

                <div className="w-full p-4 mt-6 max-sm:mt-18 border-b border-gray-200 flex flex-col gap-2 max-sm:px-0">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">manage user queries</h1>
                    <p className="font-serif text-gray-500 text-base italic max-sm:text-sm">View, respond to and manage user queries from your website</p>
                </div>

                {(queries.length === 0) ?
                    <p className="text-3xl font-serif font-semibold text-center italic">No Queries have been found</p>
                    :
                    <CustomTable title="User Queries" columns={columns} data={queries} statusStyles={queriesStatusStyles} onView={SeeQuery} onEdit={SeeQuery} onDelete={DeleteQuery} />
                }
            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-full flex flex-col gap-6 w-2xl box-border pb-10">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">User Query</h5>

                    <div className="w-full flex flex-col gap-2 px-6 font-serif text-lg">
                        <p><strong>Guardian Name:</strong> {queryData.guardianName}</p>
                        <p><strong>Child Name:</strong> {queryData.childName}</p>
                        <p><strong>Phone No:</strong> {queryData.phoneNo}</p>
                        <p><strong>Email:</strong> {queryData.email}</p>
                        <p><strong>Subject:</strong> {queryData.subject}</p>
                        <p><strong>Query:</strong> {queryData.message}</p>
                        {queryData.reply && <p className="text-gray-500"><strong>Reply:</strong> {queryData.reply}</p>}
                    </div>

                    {!queryData.reply && 
                    <div className="w-full px-6 flex flex-col gap-2">
                        <CustomTextArea label="Query Reply" placeholder="Please Reply to a User" value={queryReply} onChange={e => setQueryReply(e.target.value)}/>
                        <CustomButton onClick={() => ReplyQuery(queryData._id)} disabled={loading}>
                            {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Reply"}
                        </CustomButton>
                    </div>
                    }

                </div>

            </Modal>

        </React.Fragment>
    )
}

export default UserQueries