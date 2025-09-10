import React from "react";
import CustomTable from "../Components/CustomTable";
import CustomButton from "../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios"
import { BackendURL } from "../BackendContext";
import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";
import CustomTextArea from "../Components/CustomTextArea";

const Dashboard = ({ isSidebarHovered, user }) => {

    const URL = BackendURL()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [seeDetails, setSeeDetails] = useState(true)
    const [admins, setAdmins] = useState([])
    const [selectedAdminId, setSelectedAdminId] = useState(null)
    const [productDetails, setProductDetails] = useState([])
    const [product, setProduct] = useState()
    const [remarks, setRemarks] = useState("")

    useEffect(() => {
        axios.get(`${URL}/api/admin/get-admins`)
        .then(response => setAdmins(response.data))

        axios.get(`${URL}/api/admin/get-product-details`)
        .then(response => setProductDetails(response.data))
    },[admins, productDetails])

    const columns = [
        { key: "orderID", label: "Order Ref#" },
        { key: "userName", label: "Customer Name" },
        { key: "productName", label: "Product Name" },
        { key: "price", label: "Price" },
        { key: "createdAt", label: "Purchase Date" },
        { key: "type", label: "Type" }
    ];

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

    const RejectAdmin = () => {
        setLoading(true)
        axios.put(`${URL}/api/admin/reject-admin/${selectedAdminId}`, { remarks })
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(0)},2500)
        })
        .catch(error => {
            console.error("Getting error in rejecting admin: ",error)
            return toast.error(error?.response?.data?.error)
        })
        .finally(() => setLoading(false))
    }

    const SeeDetails = product => {
        setSeeDetails(true)
        setProduct(product)
    }

    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

                <h1 className="font-serf text-4xl max-sm:text-3xl font-bold text-black capitalize italic mt-6 max-sm:mt-18 border-b border-gray-200 p-4 max-sm:px-0 max-sm:self-start max-sm:w-full">Dashboard</h1>

                <div className="w-full flex flex-col px-4 max-sm:px-0">
                    <h3 className="font-serif text-black text-xl max-sm:text-lg">Welcome back, {user.fullname}</h3>
                    <p className="font-serif text-gray-500 text-base max-sm:text-sm">Here's what's happening with your site today.</p>
                </div>

                {(user.role === "super admin")?  (
                    <div className="w-full flex flex-col gap-4 px-4 max-sm:px-0">
                        <h3 className="font-serif text-black text-xl font-semibold capitalize">{admins.length===0? `no admin approvals`:`admin approvals`}</h3>
                        {admins.map(data => (
                        <div className="w-full h-20 bg-white border border-gray-200 rounded-xl shadow-md flex items-center justify-between px-12 max-sm:px-4 py-2 box-border">
                            <div className="flex gap-2 items-center">
                                {data.profile && <img src={data.profile} alt="User Profile Picture" className="size-16 object-cover rounded-full" />}
                                <span className="font-serif text-xl max-sm:text-base text-black font-semibold">{data.fullname}</span>
                            </div>
                            <div className="flex gap-4">
                                <CustomButton onClick={() => ApproveAdmin(data._id)}>
                                    {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Approve"}
                                </CustomButton>
                                <CustomButton onClick={() => {
                                    setSelectedAdminId(data._id)
                                    setOpen(true)
                                }}>Reject</CustomButton>
                            </div>
                        </div>
                        ))}
                    </div>
                ):null}

                {productDetails && <CustomTable title="Recent Activity" columns={columns} data={productDetails} showActions={true} onView={SeeDetails} />}

                <div className="w-full flex gap-8">
                    <CustomButton onClick={() => navigate("/manage-blogs")}>add new blog</CustomButton>
                    <CustomButton onClick={() => navigate("/manage-workshops")}>add workshop</CustomButton>
                    <CustomButton onClick={() => navigate("/manage-products")}>add product</CustomButton>
                    <CustomButton  onClick={() => navigate("/manage-courses")}>add course</CustomButton>
                </div>

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".8rem" } }}>

                <div className="w-xs flex flex-col gap-6 box-border">
                    <CustomTextArea label="Remarks" placeholder="Enter some remarks why are you rejecting this admin" value={remarks} onChange={e => setRemarks(e.target.value)}/>
                    <CustomButton onClick={RejectAdmin} disabled={loading}>
                        {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Reject"}
                    </CustomButton>
                </div>

            </Modal>

             <Modal open={seeDetails} onClose={() => setSeeDetails(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".8rem" } }}>

                {product &&
                    <div className="flex flex-col gap-2 p-2">
                        {product.type === "Product" ?
                            <>
                                <h4 className="font-serif text-2xl text-black self-center font-semibold">Product</h4>
                                <img src={product.thumbnail} alt="Product Thumnail Picture" />
                                <p className="font-serif text-base text-black"><strong>Pickup Location: </strong>{product.pickupLocation}</p>
                            </>
                            :
                            <>
                                <h4 className="font-serif text-2xl text-black self-center">Course</h4>
                                <video src={product.course} controls />
                            </>}
                    </div>
                }

            </Modal>

        </React.Fragment>
    )
}

export default Dashboard