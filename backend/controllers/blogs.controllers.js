import { request, response } from "express"
import uploadToCloudinary from "../config/cloudinary.js"
import BlogsModel from "../models/Blogs.js"

export const SaveAsDraft = async(request, response) => {
    try{
        const {title, content} = request.body
        let thumbnail = null
        if(request.file)
            thumbnail = await uploadToCloudinary(request?.file?.buffer)

        const isBlogExist = await BlogsModel.findOne({title})
        const blog = new BlogsModel({title, thumbnail, content})

        if(!(title && content))
            return response.status(400).json({error: "Title and Content are required"})

        if(isBlogExist)
        return response.status(400).json({error: "This blog already exists"})
        
        await blog.save();
        return response.status(200).json({message: "Blog Saved as Draft"})
    }catch(error){
        console.log("Getting error in uploading blog: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const UploadBlog = async(request, response) => {
    try{
        const {title, content} = request.body
        let thumbnail = null
        if(request.file)
            thumbnail = await uploadToCloudinary(request?.file?.buffer)

        const isBlogExist = await BlogsModel.findOne({title})
        const blog = new BlogsModel({
            title, 
            thumbnail, 
            content,
            status: "Published"
        })

        if(!(title && content))
            return response.status(400).json({error: "Title and Content are required"})

        if(isBlogExist)
        return response.status(400).json({error: "This blog already exists"})
        
        await blog.save();
        return response.status(200).json({message: "Blog Uploaded"})
    }catch(error){
        console.log("Getting error in uploading blog: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetAllBlogs = async(request, response) => {
    try {
        const blogs = await BlogsModel.find()
        
        if (!blogs || blogs.length === 0)
            return response.status(404).json({ error: "No blogs have been uploaded" })

        return response.status(200).json(blogs)

    } catch (error) {
        console.error("Getting errors in retrieving all blogs: ", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetSpecificBlog = async(request, response) => {
    const { id } = request.params
    const blog = await BlogsModel.findById(id)
    response.status(200).json(blog)
}

export const UpdateBlog = async(request, response) => {
    try {
        const {id} = request.params;
        const {title, content} = request.body;
        let thumbnail = request.body.thumbnail
        if(request.file)
            thumbnail = await uploadToCloudinary(request.file?.buffer)

        let UpdatedData = {
            title,
            thumbnail,
            content
        }

        const updateBlog = await BlogsModel.findByIdAndUpdate(
            id,
            UpdatedData,
            {new: true}
        )

        if(!updateBlog)
            return response.status(400).json({error: "Blog Not Found"})

        return response.status(201).json({message: "Blog have been updated"})

    } catch (error) {
        console.log("Getting error in uploading blog: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
    
}

export const DeleteBlog = async(request, response) => {
    try {
        const { id } = request.params
        const blog = await BlogsModel.findByIdAndDelete(id)

        if(!blog)
            return response.status(400).json({error: "No Blog Found"})

        return response.status(201).json({message: "Blog have been deleted"})

    } catch (error) {
        console.log("Gettting error in deleting blog: ", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ChangeStatus = async(request, response) => {
    try {
        const { id } = request.params
        const blog = await BlogsModel.findById(id)

        if(!blog)
            return response.status(400).json({error: "Blog Not Found"})

        if(blog.status==="Draft"){
            blog.status = "Published"
            await blog.save();
            return response.status(201).json({message: "Blog have been successfully published"})
        }

        if(blog.status==="Published"){
            blog.status = "Draft"
            await blog.save();
            return response.status(201).json({message: "Blog have been moved to draft"})
        }
    } catch (error) {
        console.log("Getting error in changing status: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}