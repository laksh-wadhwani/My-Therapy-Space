import mongoose from "mongoose"

const CartSchema = mongoose.Schema(
    {
        userID: {type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        products: [{
            productID: {type: mongoose.Schema.Types.ObjectId, ref: "Products" },
            courseID: {type: mongoose.Schema.Types.ObjectId, ref: "Courses" }
        }]
    },
    { timestamps: true }
)

const CartModel = mongoose.model("Cart", CartSchema)

export default CartModel