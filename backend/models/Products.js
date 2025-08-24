import mongoose from "mongoose"

const ProductsSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        thumbnail: String,
        pictures: [String],
        features: String,
    },
    { timestamps: true }
)

const ProductModel = mongoose.model("Products", ProductsSchema)

export default ProductModel