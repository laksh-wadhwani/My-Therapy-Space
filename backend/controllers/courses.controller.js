import uploadToCloudinary from "../config/cloudinary.js";
import CoursesModel from "../models/Courses.js";

export const AddCourse = async(request, response) => {
    try {
        const {name, price, description, courseIncludes} = request.body;
        const course = await CoursesModel.findOne({name})

        if(course)
            return response.status(400).json({error: "This course already exists"})

        const thumbnail = await uploadToCloudinary(request.files.thumbnail[0].buffer, "image")
        const trailer = await uploadToCloudinary(request.files.trailer[0].buffer, "video")
        const video = await uploadToCloudinary(request.files.video[0].buffer, "video")
        
        const newCourse = new CoursesModel({
            name,
            price,
            description,
            thumbnail,
            trailer,
            video,
            courseIncludes
        })
        await newCourse.save()

        return response.status(201).json({message: "The course has been uploaded successfully"})

    } catch (error) {
        console.log("Getting error in uploading course: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetCourses = async(request, response) => {
    try {
        const courses = await CoursesModel.find();

        if(!courses)
            return response.status(400).json({error: "No Courses found"})

        return response.status(201).json(courses)

    } catch (error) {
        console.log("Getting error in fetching courses: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetSpecificCourses = async(request, response) => {
    try {
        const { id } = request.params
        const course = await CoursesModel.findById(id)

        if(!course)
            return response.status(400).json({error: "No Course found"})

        return response.status(201).json(course)

    } catch (error) {
        console.log("Getting error in fetching specific course detail: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const DeleteCourse = async(request, response) => {
    try {
        const { id } = request.params
        const course = await CoursesModel.findByIdAndDelete(id)

        if(!course)
            return response.status(400).json({error: "No course found"})

        return response.status(201).json({message: "Course has been deleted successfully"})

    } catch (error) {
        console.log("Getting error in deleting course video: ",error)
    }
}