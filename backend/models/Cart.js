import mongoose from "mongoose"

const CartSchema = mongoose.Schema(
    {
        userID: {type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        productID: {type: mongoose.Schema.Types.ObjectId, ref: "Products" },
        courseID: {type: mongoose.Schema.Types.ObjectId, ref: "Courses" },
        pickupLocation: {type: String, default:null}
    },
    { timestamps: true }
)

const CartModel = mongoose.model("Cart", CartSchema)

export default CartModel