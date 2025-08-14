import uploadToCloudinary from "../config/cloudinary.js"
import BlogsModel from "../models/Blogs.js"

export const UploadBlog = async(request, response) => {
    try{
        const {title, content} = request.body
        const thumbnail = await uploadToCloudinary(request?.file?.buffer)

        const isBlogExist = await BlogsModel.findOne({title})
        const blog = new BlogsModel({title, thumbnail, content})

        if(isBlogExist)
        return response.status(400).json({error: "This blog already exists"})
        
        await blog.save();
        return response.status(200).json({message: "Blog uploaded"})
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