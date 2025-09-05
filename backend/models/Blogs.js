import mongoose from "mongoose"

const BlogsSchema = mongoose.Schema(
    {
        title: String,
        slug: { type: String, unique: true, sparse: true },
        metaDescription: String,
        excerpt: String,
        thumbnail: String,
        imageAltText: { type: String, default: "" },
        content: String,
        status: { type: String, enum: ["Draft", "Published"], default: "Draft" }
    },
    { timestamps: true }
)

BlogsSchema.pre('save', function (next) {
    if (this.isModified('title')) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') 
            .replace(/\s+/g, '-') 
            .replace(/-+/g, '-') 
            .trim('-');
    }
    next();
});

const BlogsModel = mongoose.model("Blogs", BlogsSchema)

export default BlogsModel