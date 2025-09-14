import React, { useEffect, useState } from "react";
import { Flag, UserRound } from 'lucide-react';
import CustomButton from "../Components/CustomButton";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router";
import CustomTable from "../Components/CustomTable";
import { useParams } from "react-router";
import axios from "axios";
import CustomInput from "../Components/CustomInput";
import CustomFileUpload from "../Components/CustomFileUpload";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const UserProfile = ({ setLoginUser }) => {

    const { id } = useParams();
    const URL = BackendURL()
    const navigate = useNavigate();
    const [isUpdate, setIsUpdate] = useState(false)
    const [open, setOpen] = useState(false)
    const [seeProductDetails, setSeeProductDetails] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const [bookingDetails, setBookingDetails] = useState([])
    const [orderDetails, setOrderDetails] = useState([])
    const [product, setProduct] = useState()
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        phoneNo: "",
        address: "",
        currentPass: "",
        newPass: "",
        profile: null
    })

    useEffect(() => {
        axios.get(`${URL}/api/users/get-user/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error("Getting error in fetching user: ", error))

        axios.get(`${URL}/api/users/get-booking-details/${user.email}`)
            .then(response => setBookingDetails(response.data))
            .catch(error => console.error("Getting error in fetching booking details: ", error))

        axios.get(`${URL}/api/users/get-product-details/${id}`)
            .then(response => setOrderDetails(response.data))
            .catch(error => console.error("Getting error in fetching order details: ", error))
    })

    const handleChange = (name, value) => {
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const Bookingcolumns = [
        { key: "_id", label: "BookingRef#" },
        { key: "firstName", label: "Patient Details" },
        { key: "date", label: "Date" },
        { key: "status", label: "Status" },
    ];

    const Ordercolumns = [
        { key: "orderID", label: "OrdeRef#" },
        { key: "productName", label: "Product Name" },
        { key: "price", label: "Price" },
        { key: "createdAt", label: "Purchase Date" },
        { key: "type", label: "Type" }
    ]

    const bookingStatusStyles = {
        Pending: "bg-yellow-100 text-yellow-700",
        Resolved: "bg-green-100 text-green-700",
    };


    const UserData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
        UserData.append(key, value)
    })

    const Update = userId => {
        setLoading(true)
        axios.put(`${URL}/api/users/update/${userId}`, userData)
            .then(response => {
                toast.success(response.data.message)
                const token = response.data.token
                sessionStorage.setItem("token", token)
                const decoded = jwtDecode(token)
                setLoginUser(decoded)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in updating user's basic information: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => setLoading(false))
    }

    const ChangeProfile = userId => {
        setLoading(true)
        axios.put(`${URL}/api/users/change-profile/${userId}`, UserData)
            .then(response => {
                toast.success(response.data.message)
                const token = response.data.token
                sessionStorage.setItem("token", token)
                const decoded = jwtDecode(token)
                setLoginUser(decoded)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in changing profile picture for user: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => setLoading(false))
    }

    const Logout = () => {
        setLoginUser(null)
        sessionStorage.removeItem("token")
        navigate("/")
    }

    const SeeDetails = product => {
        setSeeProductDetails(true)
        setProduct(product)
    }

    return (
        <React.Fragment>

            <div className="w-full flex flex-col lg:flex-row gap-12 px-8 pb-4 mt-16 md:mt-24 lg:mt-28">

                <div className="w-full lg:w-[27%] xl:w-[20%] lg:fixed lg:top-24 flex flex-col gap-2 items-center">

                    <div className={`w-full flex flex-col gap-2 items-center ${user.profile ? `rounded-xl bg-white border border-gray-100 shadow-lg p-2` : ``}`}>
                        {user.profile ?
                            <img src={user.profile} alt="User Profile" className="w-full h-60 object-contain" />
                            :
                            <div className="w-full h-60 bg-[#16171D] rounded-xl flex justify-center items-center shadow-lg">
                                <UserRound size={200} className="fill-gray-500 stroke-none" />
                            </div>
                        }
                    </div>

                    {isUpdate ?
                        <CustomButton onClick={() => setOpen(true)}>{user.profile ? `Change Photo` : `Upload Photo`}</CustomButton>
                        :
                        <>
                            <CustomButton onClick={() => setIsUpdate(true)}>Manage Profile</CustomButton>
                            <CustomButton onClick={Logout}>Logout</CustomButton>


                            <div className="w-full flex flex-col gap-4 text-gray-500 font-serif bg-white border border-gray-100 shadow-lg rounded-xl box-border p-4">
                                <h5 className="text-xl lg:text-lg xl:text-xl capitalize italic">personal information</h5>
                                <div className="w-full flex flex-col text-base lg:text-xs xl:text-base gap-1">
                                    <span><strong>Name:</strong> {user.fullname}</span>
                                    <span><strong>Email:</strong> {user.email}</span>
                                    <span><strong>Phone No:</strong> {user.phoneNo}</span>
                                    <span><strong>Address:</strong> {user.address}</span>
                                </div>
                            </div>
                        </>}
                </div>


                <div className="w-full lg:w-[73%] xl:w-[80%] lg:ml-[30%] xl:ml-[22%] flex flex-col gap-4 md:gap-8">

                    {isUpdate ?
                        <>
                            <div className="w-full flex flex-col gap-6">
                                <h3 className="font-serif text-2xl italic">Personal Information</h3>
                                <div className="w-full flex flex-col gap-4">
                                    <CustomInput label="Full Name" type="text" placeholder={user.fullname} value={userData.fullname} onChange={e => handleChange("fullname", e.target.value)} />
                                    <CustomInput label="Email" type="email" placeholder={user.email} value={userData.email} onChange={e => handleChange("email", e.target.value)} />
                                    <CustomInput label="Phone Number" type="text" placeholder={user.phoneNo} value={userData.phoneNo} onChange={e => handleChange("phoneNo", e.target.value)} />
                                    <CustomInput label="Address" type="text" placeholder={user.address} value={userData.address} onChange={e => handleChange("address", e.target.value)} />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-6">
                                <h3 className="font-serif text-2xl italic">Password</h3>
                                <div className="w-full flex flex-col gap-4">
                                    <CustomInput label="Current Password" placeholder="Current Password" type="password" value={userData.currentPass} onChange={e => handleChange("currentPass", e.target.value)} />
                                    <CustomInput label="New Password" type="password" placeholder="New Password" showPasswordRules={true} value={userData.newPass} onChange={e => handleChange("newPass", e.target.value)} />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-4 justify-between">
                                <CustomButton className="w-[30%] bg-blue-500" onClick={() => Update(user._id)} disabled={loading}>
                                    {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Save"}
                                </CustomButton>
                                <CustomButton className="w-[30%] bg-red-500" onClick={() => setIsUpdate(false)}>Cancel</CustomButton>
                            </div>
                        </>
                        :
                        <>
                            <h2 className="font-serif text-2xl italic text-gray-500 max-sm:text-center">Welcome back, <strong className="text-[#0BAFA6]">{user.fullname}</strong></h2>

                            {bookingDetails.length===0? <p className="font-serif capitalize max-sm:text-center text-xl">There are no bookings</p>
                            : 
                            <CustomTable title="Booking History" columns={Bookingcolumns} data={bookingDetails} showActions={false} statusStyles={bookingStatusStyles} />}

                            {orderDetails.length===0? <p className="font-serif capitalize max-sm:text-center text-xl">There are no purchases</p> : 
                            <CustomTable title="Order History" columns={Ordercolumns} data={orderDetails} showActions onView={SeeDetails} />}
                        </>
                    }

                </div>
            </div>


            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".7rem" } }}>

                <div className="flex flex-col gap-8 py-8 px-12">
                    <h4 className="font-serif text-2xl text-black self-center">Upload Profile Picture</h4>
                    <CustomFileUpload label="Profile Picture" value={user.profile} onChange={file => handleChange("profile", file)} />
                    <CustomButton onClick={() => ChangeProfile(user._id)} disabled={loading}>
                        {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Upload"}
                    </CustomButton>
                </div>

            </Modal>

            <Modal open={seeProductDetails} onClose={() => setSeeProductDetails(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".7rem" } }}>
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

export default UserProfile
