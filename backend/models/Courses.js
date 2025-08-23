import mongoose from "mongoose";

const CoursesSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        thumbnail: String,
        trailer: String,
        video: String,
        courseIncludes: String
    },
    { timestamps:true }
)

const CoursesModel = mongoose.model("Courses", CoursesSchema)

export default CoursesModel