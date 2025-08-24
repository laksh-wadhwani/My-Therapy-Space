import mongoose from "mongoose"

const BlogsSchema = mongoose.Schema(
    {
        title: String,
        thumbnail: String,
        content: String,
        status: {type: String, enum: ["Draft", "Published"], default: "Draft"}
    },
    { timestamps: true }
)

const BlogsModel = mongoose.model("Blogs", BlogsSchema)

export default BlogsModel