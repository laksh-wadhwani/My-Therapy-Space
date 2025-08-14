import mongoose from "mongoose"

const BlogsSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    content: String
})

const BlogsModel = mongoose.model("Blogs", BlogsSchema)

export default BlogsModel