import React from "react";
import CustomButton from "../Components/CustomButton";
import CustomSearchBar from "../Components/CustomSearchBar";
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-responsive-modal";
import CustomInput from "../Components/CustomInput";
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomTextArea from "../Components/CustomTextArea";
import axios from "axios"
import { toast } from "react-toastify";
import { useEffect } from "react";


const TeamMembers = ({ isSidebarHovered }) => {

    const URL = BackendURL()
    const naviagte = useNavigate();
    const [open, setOpen] = useState(false)
    const [seeMember, setSeeMember] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const [members, setMembers] = useState([])
    const [member, setMember] = useState()
    const [team, setTeam] = useState({
        name: "",
        designation: "",
        profile: null,
        description: ""
    })

    useEffect(() => {
        axios.get(`${URL}/api/team/get-team-members`)
            .then(response => setMembers(response.data))
            .catch(error => console.error("Getting error in fetching team members data: ", error))
            .finally(() => setLoading(false))
    })

    const handleChange = (name, value) => {
        setTeam(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const SeeMemberDetails = member => {
        setSeeMember(true)
        setMember(member)
    }

    const TeamData = new FormData();
    Object.entries(team).forEach(([key, value]) => {
        TeamData.append(key, value)
    })

    const AddTeamMember = () => {
        setUploading(true)
        axios.post(`${URL}/api/team/add-member`, TeamData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { naviagte(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in adding team member: ", error)
                toast.error(error?.response?.data?.error)
            })
            .finally(() => setUploading(false))
    }

    const UpdateMember = memberId => {
        setUploading(true)
        axios.put(`${URL}/api/team/update-member-details/${memberId}`, TeamData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { naviagte(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in updating member details: ", error)
                toast.error(error.response?.data?.error)
            })
            .finally(() => setUploading(false))
    }

    const DeleteMember = memberId => {
        axios.delete(`${URL}/api/team/delete-member/${memberId}`)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { naviagte(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in deleting team member: ", error)
                return toast.error(error?.response?.data?.error)
            })
    }

    if (loading) {
        return (
            <div className="w-full h-dvh flex justify-center items-center">
                <p className="text-lg font-serif text-gray-500 italic text-center">
                    Loading Team Members...
                </p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? 'w-[82%]' : 'w-[94%]'} flex flex-col max-sm:items-center gap-8 pb-12 max-sm:w-full max-sm:px-6 box-border`}>

                <div className="w-full p-4 mt-6 max-sm:mt-18 border-b border-gray-200 flex flex-col gap-2 max-sm:px-0">
                    <h1 className="font-serf text-4xl max-sm:text-3xl font-bold text-black capitalize italic">manage team members</h1>
                    <p className="font-serif text-gray-500 text-base italic max-sm:text-sm">Create, edit and manage team members for your website</p>
                </div>

                <div className="w-full px-10 max-sm:px-0 flex justify-between items-center">
                    <CustomButton onClick={() => setOpen(true)}>add new member</CustomButton>
                    <CustomSearchBar placeholder="Search" />
                </div>

                {(members.length === 0) ? <p className="font-serif text-black text-3xl font-semibold italic text-center">No Team Members have been listed</p>
                    :
                    <div className="w-full grid grid-cols-4 max-sm:grid-cols-1 place-items-center">
                        {members.map(memeber => (
                            <div className="w-64 h-72 flex flex-col items-center cursor-pointer hover:scale-105" onClick={() => SeeMemberDetails(memeber)}>
                                <div className="w-full h-[75%] bg-[#ECF1ED] rounded-3xl">
                                    <img src={memeber.profile} alt="Team Member" className="size-full object-contain" />
                                </div>
                                <h4 className="font-serif capitalize text-lg text-black">{memeber.name}</h4>
                                <span className="font-serif text-base capitalize text-gray-500">{memeber.designation}</span>
                            </div>
                        ))}
                    </div>
                }

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-xl max-sm:w-full flex flex-col gap-6 box-border pb-6">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new member</h5>

                    <div className="w-full flex flex-col gap-4 px-6">
                        <CustomInput label="Name" placeholder="Name" type="text" value={team.name} onChange={e => handleChange("name", e.target.value)} />
                        <CustomInput label="Designation" placeholder="Designation" type="text" value={team.designation} onChange={e => handleChange("designation", e.target.value)} />
                        <CustomFileUpload label="Profile" value={team.profile} onChange={file => handleChange("profile", file)} />
                        <CustomTextArea label="Description" placeholder="Enter short description of member" value={team.description} onChange={e => handleChange("description", e.target.value)} />
                    </div>

                    <div className="w-full px-6 flex justify-center gap-2">
                        <CustomButton onClick={AddTeamMember} disabled={uploading}>
                            {uploading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save"}
                        </CustomButton>
                    </div>

                </div>

            </Modal>

            <Modal open={seeMember} onClose={() => setSeeMember(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".8rem" } }}>

                {isUpdate ?
                    (<div className="w-auto flex flex-col items-center gap-4 px-16 py-4">
                        <h5 className="font-serif text-xl text-black capitalize font-semibold italic">Update Team Member</h5>

                        <div className="w-full flex flex-col gap-4">
                            <CustomInput label="Name" placeholder={member.name} type="text" value={team.name} onChange={e => handleChange("name", e.target.value)} />
                            <CustomInput label="Designation" placeholder={member.designation} type="text" value={team.designation} onChange={e => handleChange("designation", e.target.value)} />
                            <CustomFileUpload label="Profile" value={team.profile} onChange={file => handleChange("profile", file)} />
                            <CustomTextArea label="Description" placeholder={member.description} value={team.description} onChange={e => handleChange("description", e.target.value)} />
                        </div>

                        <div className="w-full flex justify-center gap-10">
                            <CustomButton className="bg-blue-500" disabled={uploading} onClick={() => UpdateMember(member._id)}>
                                {uploading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save"}
                            </CustomButton>
                            <CustomButton className="bg-red-500" onClick={() => setIsUpdate(false)}>Cancel</CustomButton>
                        </div>

                    </div>)
                    :
                    (<>
                        {member && (<div className="w-auto flex flex-col items-center px-16 max-sm:px-0">
                            <div className="w-64 max-sm:w-36 h-72 max-sm:h-50 flex flex-col items-center">
                                <div className="w-full h-[75%] bg-[#ECF1ED] rounded-3xl max-sm:rounded-xl">
                                    <img src={member.profile} alt="Team Member" className="size-full object-contain max-sm:object-cover" />
                                </div>
                                <h4 className="font-serif capitalize text-lg max-sm:text-xs text-black">{member.name}</h4>
                                <span className="font-serif text-base max-sm:text-sm capitalize text-gray-500">{member.designation}</span>
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <p className="font-serif text-base max-sm:text-xs text-center">{member.description}</p>
                                <div className="w-full flex justify-center gap-10">
                                    <CustomButton onClick={() => setIsUpdate(true)}>Update</CustomButton>
                                    <CustomButton className="bg-red-500" onClick={() => DeleteMember(member._id)}>Delete</CustomButton>
                                </div>
                            </div>

                        </div>)}
                    </>)}

            </Modal>
        </React.Fragment>
    )
}

export default TeamMembers