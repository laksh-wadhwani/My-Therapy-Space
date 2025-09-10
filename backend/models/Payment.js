import mongoose from "mongoose"

const PaymentSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
        amount: { type: Number, required: true },
        currency: { type: String, default: "aud" },
        status: { type: String, required: true },
        paymentIntentId: { type: String, required: true },
        productID: {type: mongoose.Schema.Types.ObjectId, ref: "Products"},
        courseID: {type: mongoose.Schema.Types.ObjectId, ref: "Courses"},
        pickupLocation: String
    },
    {timestamps: true}
)

const PaymentModel = mongoose.model("Payment", PaymentSchema)

export default PaymentModel