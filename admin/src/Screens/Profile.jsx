import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import CustomFileUpload from "../Components/CustomFileUpload";

const Profile = ({ isSidebarHovered, user }) => {

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

    const handleChange = eventTriggered => {
        const { name, type, value, files } = eventTriggered.target;

        if (type === "file") {
            const file = files[0];
            if (file && !file.type.startsWith("image/")) {
                toast.error("Only image files are allowed!");
                return;
            }
            setUpdatedUser({
                ...updatedUser,
                [name]: file
            });
        } else {
            setUpdatedUser({
                ...updatedUser,
                [name]: value
            });
        }
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
            setTimeout(() => {navigate(0)},2500)
        })
        .catch(error => {
            console.error("Getting error in updating basic details: ",error)
            return toast.error(error?.response?.data?.error)
        })
        .finally(() => {setLoading(false)})
    }

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

                <div className="w-[45%] max-sm:w-full flex flex-col gap-4 mt-16 max-sm:mt-24">
                    <h5 className="font-serif text-3xl capitalize italic text-black font-normal">personal information</h5>
                    <div className="flex flex-col gap-6 p-8 border border-gray-200 rounded-xl shadow-md">
                        <CustomInput label="Full Name" type="text" placeholder={user.fullname} name="fullname" value={updatedUser.fullname} onChange={handleChange} />
                        <CustomInput label="Email" type="email" placeholder={user.email} name="email" value={updatedUser.email} onChange={handleChange} />
                        <CustomFileUpload label="Admin Profile" value={updatedUser.profile} onChange={handleChange} />
                        <CustomButton className="w-fit" onClick={() => Update(user.id)}>
                            {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Save"}
                        </CustomButton>
                    </div>
                </div>

                <div className="w-[45%] max-sm:w-full flex flex-col gap-4 mt-16 max-sm:mt-0">
                    <h5 className="font-serif text-3xl capitalize italic text-black font-normal">password</h5>
                    <div className="flex flex-col gap-6 p-8 border border-gray-200 rounded-xl shadow-md">
                        <CustomInput label="Old Password" type="password" placeholder="OldPassword" name="password" value={updatedUser.password} onChange={handleChange} />
                        <CustomInput label="New Password" type="password" placeholder="New Password" name="newPass" value={updatedUser.newPass} onChange={handleChange} />
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