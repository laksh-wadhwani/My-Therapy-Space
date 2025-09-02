import uploadToCloudinary from "../config/cloudinary.js"
import TeamModel from "../models/Team.js"

export const AddTeamMember = async (request, response) => {
    try {
        const { name, designation, description } = request.body
        const member = await TeamModel.findOne({ name, designation })

        if (member)
            response.status(400).json({ error: "Member already exists" })

        if (!(name && designation && description))
            return response.status(400).json({ error: "Please fill all fields" })

        if (!request.file)
            return response.status(400).json({ error: "Profile Picture is mandatory" })

        const profile = await uploadToCloudinary(request.file?.buffer, "image")

        const newMember = new TeamModel({
            name,
            designation,
            profile: profile.secure_url,
            description,
            adminApproval: true
        })

        await newMember.save();
        return response.status(201).json({ message: "Team Member has been added successfully" })

    } catch (error) {
        console.log("Getting error in adding team memebr: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetTeamMembers = async (request, response) => {
    try {
        const members = await TeamModel.find()

        if (!members)
            return response.status(400).json({ error: "No Team Members found" })

        return response.status(201).json(members)

    } catch (error) {
        console.log("Getting error in fetching all team members data: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetSpecificMember = async (request, response) => {
    try {
        const { id } = request.params
        const memeber = await TeamModel.findById(id)

        if (!memeber)
            response.status(400).json({ error: "No team member found" })

        return response.status(201).json(memeber)

    } catch (error) {
        console.log("Getting error in fetching specific member details: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const UpdateMemberDetails = async (request, response) => {
    try {
        const { id } = request.params
        const { name, designation, description } = request.body
        let profile = null
        if (request.file)
            profile = await uploadToCloudinary(request.file?.buffer, "image")

        const member = await TeamModel.findById(id)
        if (!member)
            return response.status(400).json({ error: "Member not found" })

        const duplicateMember = await TeamModel.findOne({ name, designation })
        if (duplicateMember)
            response.status(400).json({ error: "Member already exists" })

        if (name) member.name = name
        if (designation) member.designation = designation
        if (profile !== null) member.profile = profile.secure_url
        if (description) member.description = description

        await member.save();
        return response.status(201).json({ message: "Member details has been updated" })
    } catch (error) {
        console.log("Getting error in updatig member details: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const DeleteMember = async (request, response) => {
    try {
        const { id } = request.params
        const member = await TeamModel.findByIdAndDelete(id)

        if (!member)
            return response.status(400).json({ error: "Member not found" })

        return response.status(201).json({ message: "Member has been deleted successfully" })
    } catch (error) {
        console.log("Getting error in deleting member: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}