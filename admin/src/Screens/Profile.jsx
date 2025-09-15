import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CustomFileUpload from "../Components/CustomFileUpload";
import { jwtDecode } from "jwt-decode";

const Profile = ({ isSidebarHovered, user, setLoginUser }) => {

    const URL = BackendURL()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [updatedUser, setUpdatedUser] = useState({
        fullname: "",
        email: "",
        profile: null,
        password: "",
        newPass: ""
    })

    const handleChange = (name, value) => {
        setUpdatedUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const Update = userId => {
        const UserData = new FormData();
        Object.entries(updatedUser).forEach(([Key, value]) => {
            UserData.append(Key, value)
        })
        setLoading(true)
        axios.put(`${URL}/api/admin/update/${userId}`, UserData )
        .then(response => {
            toast.success(response.data.message)
            const token = response.data.token
            sessionStorage.setItem("token", token)
            const decoded = jwtDecode(token)
            setLoginUser(decoded)
            setTimeout(() => {
                navigate(0)
            }, 2500)
        })
        .catch(error => {
            console.error("Getting error in updating basic details: ",error)
            toast.error(error?.response?.data?.error)
        })
        .finally(() => {setLoading(false)})
    }

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

                <div className="w-[45%] max-sm:w-full flex flex-col gap-4 mt-16 max-sm:mt-24">
                    <h5 className="font-serif text-3xl capitalize italic text-black font-normal">personal information</h5>
                    <div className="flex flex-col gap-6 p-8 border border-gray-200 rounded-xl shadow-md">
                        <CustomInput label="Full Name" type="text" placeholder={user.fullname} value={updatedUser.fullname} onChange={e => handleChange("fullname", e.target.value)} />
                        <CustomInput label="Email" type="email" placeholder={user.email} value={updatedUser.email} onChange={e => handleChange("email", e.target.value)} />
                        <CustomFileUpload label="Admin Profile" value={updatedUser.profile} onChange={file => handleChange("profile", file)} />
                        <CustomButton className="w-fit" onClick={() => Update(user.id)}>
                            {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Save"}
                        </CustomButton>
                    </div>
                </div>

                <div className="w-[45%] max-sm:w-full flex flex-col gap-4 mt-16 max-sm:mt-0">
                    <h5 className="font-serif text-3xl capitalize italic text-black font-normal">password</h5>
                    <div className="flex flex-col gap-6 p-8 border border-gray-200 rounded-xl shadow-md">
                        <CustomInput label="Old Password" type="password" placeholder="Old Password" value={updatedUser.password} onChange={e => handleChange("password", e.target.value)} />
                        <CustomInput label="New Password" type="password" placeholder="New Password" showPasswordRules={true} value={updatedUser.newPass} onChange={e => handleChange("newPass", e.target.value)} />
                        <CustomButton className="w-fit" onClick={() => Update(user.id)}>
                            {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Save"}
                        </CustomButton>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Profile