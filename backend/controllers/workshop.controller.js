import { request, response } from "express"
import uploadToCloudinary from "../config/cloudinary.js"
import WorkshopModel from "../models/Workshop.js"

export const AddWorkshop = async(request, response) => {
    try {
        const {title, facilitator, date} = request.body
        const workshopImage = await uploadToCloudinary(request?.file?.buffer)
        const workshop = await WorkshopModel.findOne({title})

        if(workshop)
            return response.status(400).json({error: "Workshop already exists"})

        const newWorkshop = new WorkshopModel({
            title,
            facilitator,
            date,
            workshopImage,
            status: "Active"
        })
        await newWorkshop.save();

        return response.status(201).json({message: "Workshop have been added"})
    } catch (error) {
        console.log("Getting error in uploading workshop: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const SaveAsDraft = async(request, response) => {
    try {
        const {title, facilitator, date} = request.body
        const workshopImage = await uploadToCloudinary(request?.file?.buffer)
        const workshop = await WorkshopModel.findOne({title})

        if(workshop)
            return response.status(400).json({error: "Workshop already exists"})

        const newWorkshop = new WorkshopModel({
            title,
            facilitator,
            date,
            workshopImage,
        })
        await newWorkshop.save();

        return response.status(201).json({message: "Workshop have been added"})
    } catch (error) {
        console.log("Getting error in uploading workshop: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetAllWorkshops = async(request, response) => {
    try {
        const workshops = await WorkshopModel.find()
        response.status(201).json(workshops)
    } catch (error) {
        console.log("Getting error in fetching workshops data: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetSpecificWorkshop = async(request, response) => {
    try {
        const { id } = request.params;
        const workshop = await WorkshopModel.findById(id)

        if(!workshop)
            return response.status(400).json({error: "Workshop not found"})
        
        return response.status(201).json(workshop)
    } catch (error) {
        console.log("Getting error in fetching workshop details: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const UpdateWorkshop = async(request, response) => {
    try {
        const {id} = request.params
        const {title, facilitator, date} = request.body
        let workshopImage = null
        if(request.file)
            workshopImage = await uploadToCloudinary(request.file?.buffer)

        const workshop = await WorkshopModel.findById(id)

        if(!workshop)
            return response.status(400).json({error: "Workshop not found"})

        if(title) workshop.title = title
        if(facilitator) workshop.facilitator = facilitator
        if(date) workshop.date = date
        if(workshopImage) workshop.workshopImage = workshopImage
        await workshop.save()

        return response.status(201).json({message: "Workshop detail has been updated"})

    } catch (error) {
        console.log("Getting error in updating workshop details: ", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const DeleteWorkshop = async(request, response) => {
    try {
        const {id} = request.params
        const workshop = await WorkshopModel.findByIdAndDelete(id)

        if(!workshop)
            return response.status(400).json({error: "Workshop Not Found"})

        return response.status(201).json({message: "Workshop has been deleted"})
    } catch (error) {
        console.log("Getting error in deleting workshop details: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ChangeStatus = async(request, response) => {
    try {
        const {id} = request.params;
        const workshop = await WorkshopModel.findById(id)

        if(!workshop)
            return response.status(400).json({error: "Workshop not found"})

        if(workshop.status==="Draft"){
            workshop.status = "Active"
            await workshop.save();
            return response.status(201).json({message: "This workshop is active now."})
        }

        if(workshop.status==="Active"){
            workshop.status = "Draft"
            await workshop.save();
            return response.status(201).json({message: "This workshop has moved to draft"})
        }
    } catch (error) {
        console.log("Getting error in changing status of workshop: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}